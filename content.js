function parseDuration(durationStr) {
  const parts = durationStr.trim().split(':').map(Number);
  if (parts.length === 3) return parts[0]*3600 + parts[1]*60 + parts[2];
  if (parts.length === 2) return parts[0]*60 + parts[1];
  return parts[0];
}

function secondsToHMS(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h} hour${h !== 1 ? 's' : ''}, ${m} minute${m !== 1 ? 's' : ''}, ${s} second${s !== 1 ? 's' : ''}`;
}

function createResultsUI(count, avgSecs, totalSecs) {
  // Remove previous result if present
  const oldResult = document.getElementById('ytpl-extension-result');
  if (oldResult) oldResult.remove();

  const div = document.createElement('div');
  div.id = 'ytpl-extension-result';
  div.style.position = 'fixed';
  div.style.top = '80px';
  div.style.right = '32px';
  div.style.zIndex = '10000';
  div.style.background = '#181818';
  div.style.color = 'white';
  div.style.padding = '16px 24px';
  div.style.borderRadius = '12px';
  div.style.border = '2px solid red';
  div.style.boxShadow = '0 2px 12px rgba(0,0,0,0.5)';
  div.style.fontSize = '16px';
  div.innerHTML =
    `<strong>Video count:</strong> ${count} (from 1 to ${count}) <br>
    <strong>Average video length:</strong> ${secondsToHMS(avgSecs)}<br>
    <strong>Total length:</strong> ${secondsToHMS(totalSecs)}`;
  document.body.appendChild(div);
}

function calculatePlaylistDuration() {
  let durationElements = document.querySelectorAll(
    'ytd-playlist-video-renderer #text.ytd-thumbnail-overlay-time-status-renderer'
  );
  if (durationElements.length === 0) {
    durationElements = document.querySelectorAll(
      'ytd-playlist-video-renderer span.ytd-thumbnail-overlay-time-status-renderer'
    );
  }

  let totalSeconds = 0;
  let videoCount = durationElements.length;

  durationElements.forEach(el => {
    totalSeconds += parseDuration(el.textContent);
  });

  let avgSeconds = videoCount ? Math.floor(totalSeconds / videoCount) : 0;

  createResultsUI(videoCount, avgSeconds, totalSeconds);
}

// Give time for playlist to render
setTimeout(calculatePlaylistDuration, 2500);
