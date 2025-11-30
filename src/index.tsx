import '@logseq/libs'

import { settings } from './settings'

const main = async () => {
  await logseq.UI.showMsg('logseq-mediatimestamp-plugin loaded')

  const getVideoEl = async (uuid: string): Promise<HTMLVideoElement | null> => {
    const blk = await logseq.Editor.getBlock(uuid)
    if (!blk) return null

    const parentBlk = await logseq.Editor.getBlock(blk.parent.id)
    if (!parentBlk) return null

    return top?.document.querySelector(
      `#ls-block-${parentBlk.uuid} video`,
    ) as HTMLVideoElement
  }

  await logseq.Editor.registerSlashCommand(
    'Insert timestamp',
    async ({ uuid }) => {
      const videoEl = await getVideoEl(uuid)
      if (!videoEl) {
        await logseq.UI.showMsg('No video found in parent block')
        return
      }
      await logseq.Editor.insertAtEditingCursor(
        `{{renderer :mediatimestamp_${uuid}, ${videoEl.currentTime}}}`,
      )
    },
  )

  logseq.provideStyle(`
    .logseq-mediatimestamp-plugin {
      border: 1px solid; 
      padding: 0 10px;
      border-radius: 6px;
    }
  `)

  logseq.App.onMacroRendererSlotted(
    async ({ slot, payload: { uuid, arguments: args } }) => {
      const [type, time] = args

      if (!type || !type.startsWith(':mediatimestamp_')) return

      const id = `mediatimestamp_${uuid}_${slot}`

      logseq.provideModel({
        async mediaclick() {
          const videoEl = await getVideoEl(uuid)
          if (!videoEl || !time) {
            await logseq.UI.showMsg(
              'Unable to get obtain video element',
              'error',
            )
          } else {
            videoEl.currentTime = parseInt(time) || 0
            videoEl.play()
          }
        },
      })

      if (time) {
        logseq.provideUI({
          key: id,
          slot,
          reset: true,
          template: `<button id="${id}" class="logseq-mediatimestamp-plugin" data-on-click="mediaclick">Timestamp: ${parseInt(time)}s</button>`,
        })
      }
    },
  )
}

logseq.useSettingsSchema(settings).ready(main).catch(console.error)
