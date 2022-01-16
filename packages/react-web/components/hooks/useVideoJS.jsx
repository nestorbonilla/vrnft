import * as React from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export const useVideoJS = (videoJsOptions) => {
  const videoNode = React.useRef(null)
  const player = React.useRef(null)
  const changedKey = React.useRef(null)

  React.useEffect(() => {
    player.current = videojs(videoNode.current, videoJsOptions)

    return () => {
      player.current.dispose()
    }
  }, [changedKey])

  const Video = React.useCallback(
    ({children, ...props}) => {
      return (
        <div data-vjs-player key={changedKey}>
          <video ref={videoNode} className="video-js" {...props}>
            {children}
          </video>
        </div>
      )
    },
    [changedKey],
  )
  return {Video, player: player.current}
}