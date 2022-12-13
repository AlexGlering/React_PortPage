import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const Header = () => {
  return (
    <div className="app__header app__flex hexagon">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hi, I'm</p>
              <h1 className="head-text">
                <span>Alex </span>Glering
              </h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Software Engineering Student</p>
            <p className="p-text">Licensed educator/teacher</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/*<img src={images.monke1} alt="profile_bg" className="monke"/>*/}
        <motion.img
          whileInView={{ scale: [0, 1.3], opacity: 0.5, rotate: 360 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          src={images.cyberframe}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        className="app__header-circles"
        whileInView={{ opacity: [0, 1] }}
      >
        {[images.postgres, images.java, images.react].map((circle, index) => (
          <motion.div
            className="circle-cmp app__flex"
            key={`circle-${index}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.5 }}
          >
            <img src={circle} alt="circle" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
