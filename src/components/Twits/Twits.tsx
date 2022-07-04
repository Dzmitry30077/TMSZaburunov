import { TwitterTimelineEmbed } from "react-twitter-embed";

const sss = 'sad'

const Twits = () => {
  return (
    <div className="container margtop3rem">
      <TwitterTimelineEmbed
        sourceType="widget"
        widgetId="539487832448843776"
        options={{className:{sss}}}
      />
    </div>
    // <TwitterTimelineEmbed
    //   sourceType="widget"
    //   widgetId="539487832448843776"
    //   options={{class:'container margtop3rem'}}
    // />
  )
}

export default Twits;