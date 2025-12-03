# Logseq Media Timestamp Plugin

![Logseq](https://img.shields.io/badge/Logseq-Plugin-blue?style=flat-square)
![License](https://img.shields.io/github/license/benjypng/logseq-mediatimestamp-plugin?style=flat-square)

A Logseq plugin that allows you to insert and navigate to specific timestamps in locally embedded media files. This makes it easy to take notes on videos and quickly jump back to specific points of interest.

## Features

- **Insert Timestamp:** Easily capture the current playback time of a video in a parent block using the slash command `/Insert timestamp`.
- **Navigate to Timestamp:** Creates a clickable button (e.g., `Timestamp: 120s`) that automatically seeks the video to the recorded time and resumes playback.
- **Local Media Support:** Designed to work with locally embedded media files.

## Usage

1.  **Embed a Media File:** Upload or embed a video file into a block in Logseq.
2.  **Create a Note Block:** Create a new block indented under the media block (a child block).
3.  **Play Video:** Start playing the video and pause at the moment you want to timestamp.
4.  **Insert Timestamp:** Type `/Insert timestamp` in the child block and press Enter.
5.  **Result:** A button displaying the timestamp will be inserted. You can add your notes after or around this button.
6.  **Navigation:** Clicking the button will scroll the video in the parent block into view (if needed), seek to the timestamp, and start playing.

## Installation

### From Marketplace

1.  Open Logseq.
2.  Go to **Settings** > **Plugins** > **Marketplace**.
3.  Search for `logseq-mediatimestamp-plugin`.
4.  Click **Install**.

### Manual Installation

1.  Download the latest release zip file from the [Releases](https://github.com/benjypng/logseq-mediatimestamp-plugin/releases) page.
2.  Unzip the file.
3.  Open Logseq and go to **Settings** > **Advanced**.
4.  Enable **Developer mode**.
5.  Go to **Settings** > **Plugins**.
6.  Click **Load unpacked plugin**.
7.  Select the folder where you unzipped the plugin.

## Development

If you want to contribute or modify the plugin, follow these steps:

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18 or higher recommended)
-   [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Setup

1.  Clone the repository:
    ```bash
    git clone https://github.com/benjypng/logseq-mediatimestamp-plugin.git
    cd logseq-mediatimestamp-plugin
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Building

To build the project for production:

```bash
npm run build
```

This will generate the distribution files in the `dist` directory.

### Running in Development Mode

To run the plugin in development mode with hot reloading (via Vite):

```bash
npm run dev
```

1.  Run the command above.
2.  Open Logseq.
3.  Load the plugin manually (point to the project root directory).
4.  **Note:** If Logseq does not pick up the changes automatically or if `npm run dev` doesn't work as expected with your specific environment, you can run `npm run build` and reload the plugin in Logseq.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
