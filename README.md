# YEETPILL - YouTube Playlist Video-Length Calculator

A Chrome extension that automatically calculates and displays the total duration, average video length, and video count for YouTube playlists.

## Features

- 🕐 **Total Playlist Duration** - Shows the combined length of all videos in a playlist
- 📊 **Average Video Length** - Calculates the mean duration across all videos
- 🔢 **Video Count** - Displays the total number of videos in the playlist
- 🎨 **Clean UI** - Non-intrusive overlay that matches YouTube's dark theme
- ⚡ **Automatic Detection** - Works instantly when you visit any YouTube playlist

## Installation

### From Source (Developer Mode)

1. Clone or download this repository
```bash
git clone https://github.com/yourusername/yeetpill.git
```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the project folder

5. The extension should now be installed and active

## Usage

1. Navigate to any YouTube playlist (URL format: `https://www.youtube.com/playlist?list=...`)
2. Wait 2-3 seconds for the playlist to fully load
3. The extension will automatically display a results box in the top-right corner showing:
   - Total video count
   - Average video duration
   - Total playlist duration

## File Structure

```
YEETPILL/
├── content.js      # Main extension logic
├── manifest.json   # Extension configuration
├── img.png        # Extension icon
└── README.md      # This file
```

## Technical Details

- **Manifest Version**: 3 (Chrome Extensions Manifest V3)
- **Permissions**: `activeTab` for YouTube access
- **Content Script**: Automatically injected on YouTube playlist pages
- **Supported Sites**: YouTube playlists only

## How It Works

The extension uses content scripts to:

1. Parse video duration elements from YouTube's DOM
2. Convert time formats (MM:SS, HH:MM:SS) to seconds using [`parseDuration`](content.js)
3. Calculate totals and averages
4. Display results in a styled overlay using [`createResultsUI`](content.js)

## Browser Compatibility

- Chrome (Manifest V3 compatible)
- Edge (Chromium-based)
- Other Chromium-based browsers

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Issues & Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/yourusername/yeetpill/issues) on GitHub.
