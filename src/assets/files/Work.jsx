import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import LanguageIcon from '@mui/icons-material/Language';
  import UpdateIcon from '@mui/icons-material/Update';
  import "./Work.css";
  
  const Work = () => {
    return (
      <div className="work-container cyber-razor-top cyber-razor-bottom bg-white">
        <div>

        <h1 className="cyber-h cyber-glitch-2" style={{ textAlign: "center", color:'#151412"' }}>
          Work Experience
        </h1>
        </div>
        <div>
        <VerticalTimeline lineColor="#151412" className="cyber-glitch-1">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#42B7AE", color: "#151412" }}
            contentArrowStyle={{
              borderRight: "7px solid  #42B7AE",
            }}
            date={<span style={{ marginLeft: '10px'}}>May 2023</span>}
            iconStyle={{ background: "#42B7AE", color: "#fff" }}
            icon={<LanguageIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
              Web Hosting
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Internship</h4>
            <p>
              Did a one month internship in a web hosting company. Learned how to host and manage hosted websites aswell as fix & and help in new website creations for clients.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#42B7AE", color: "#151412" }}
            contentArrowStyle={{
              borderRight: "7px solid  #42B7AE",
            }}
            date={<span style={{ marginRight: '10px'}}>Present</span>}
            iconStyle={{ background: "#42B7AE", color: "#fff" }}
            icon={<UpdateIcon />}
          >
            <h3 className="vertical-timeline-element-title">
            Currently doing CyberSecurity Course
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
              Check back later to see more experience of mine.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
        
      </div>
    );
  };
  
  export default Work;
  