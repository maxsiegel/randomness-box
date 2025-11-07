#!/usr/bin/env bash
# Usage: ./yt_extract_90s.sh <YouTube_URL> [output_dir]

set -e

URL="$1"
OUTDIR="${2:-.}"

mkdir -p "$OUTDIR"
VIDEO="$OUTDIR/video.webm"
AUDIO="$OUTDIR/clip.mp3"

# Download best quality video+audio
yt-dlp -f "bestvideo+bestaudio/best" -o "$VIDEO" "$URL"

# Extract first 90 seconds to WAV
ffmpeg -y -i "$VIDEO" -t 90 -ac 2 -ar 44100 "$AUDIO"

echo "Extracted first 90 seconds to: $AUDIO"

open $OUTDIR
