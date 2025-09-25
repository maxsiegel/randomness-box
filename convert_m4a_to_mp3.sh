#!/bin/bash
# convert all .m4a files in the current folder to .mp3

for f in audio/*.m4a; do
    # strip extension and add .mp3
    out="${f%.m4a}.mp3"
    echo "Converting $f -> $out"
    ffmpeg -i "$f" -codec:a libmp3lame -qscale:a 2 "$out"
done
