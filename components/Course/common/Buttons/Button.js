import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./button.module.css";
import { MdCardMembership } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { useRouter } from "next/router";
import CoursePageData from "../../data/CoursePageData";
import Link from "next/link";

function waLink(msg) {
  let url = "https://api.whatsapp.com/send?";
  let params = new URLSearchParams("");
  params.append("phone", "918075145434");
  params.append("text", msg);
  return url + params.toString();
}

export const WaButton = ({ ButtonText, ClassName }) => {
  const router = useRouter();
  const { courseid } = router.query;
  const [data, setdata] = React.useState({});
  const [redirecturl, setredirecturl] = React.useState("");
  React.useEffect(() => {
    switch (courseid) {
      case "forex":
        setdata(CoursePageData.forex);
        break;
      case "professional":
        setdata(CoursePageData.professional);
        break;
      case "starter":
        setdata(CoursePageData.starter);
    }
  }, [courseid]);
  useEffect(() => {
    setredirecturl(waLink(data.message));
  }, [data, ButtonText, ClassName]);
  return (
    <a href={redirecturl} target="_blank" rel="noopener noreferrer">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={ClassName}
      >
        {ButtonText}
      </motion.button>
    </a>
  );
};
const Button = ({ ButtonText, IconName, BgColor, TextColor }) => {
  const router = useRouter();
  const { courseid } = router.query;
  const [data, setdata] = React.useState({});
  const [redirecturl, setredirecturl] = React.useState("");
  React.useEffect(() => {
    switch (courseid) {
      case "forex":
        setdata(CoursePageData.forex);
        break;
      case "professional":
        setdata(CoursePageData.professional);
        break;
      case "starter":
        setdata(CoursePageData.starter);
    }
  }, [courseid]);
  const [bg, setbg] = React.useState(BgColor);
  const [text, settext] = React.useState(TextColor);

  useEffect(() => {
    if (BgColor === "buttonblue") {
      setbg("bg-buttonblue");
    }
    if (BgColor === "buttonyellow") {
      setbg("bg-yellow");
    }
    if (BgColor === "buttongreen") {
      setbg("bg-green");
    }
    if (TextColor === "white") {
      settext("text-white");
    }
    if (TextColor === "black") {
      settext("text-black");
    }
    if (ButtonText.includes("Enroll Now")) {
      setredirecturl(waLink(data.message));
    }
    if (ButtonText.includes("Enroll for")) {
      setredirecturl('#EnrollNow');
    }
    if (ButtonText == "Curriculum" || ButtonText == "curriculum") {
      setredirecturl(`/course/${courseid}`);
    }
    if (ButtonText === "Talk to us") {
      setredirecturl(waLink(data.message));
    }
  }, [ButtonText, BgColor, TextColor, IconName, data]);

  const ButtonIconSelection = (IconName) => {
    switch (IconName) {
      case "card":
        return <MdCardMembership className={styles["membership-icon"]} />;
        break;
      case "Book":
        return <HiOutlineBookOpen className={styles["membership-icon"]} />;
        break;
      case "whatsapp":
        return <BsWhatsapp className={styles["membership-icon"]} />;
      default:
        return <MdCardMembership className={styles["button-icon"]} />;
    }
  };
  return (
    <Link href={redirecturl}>
      <motion.button
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { type: "spring", mass: 1.15, delay: 1.5 },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${styles["talk-button"]} ${bg} ${text}`}
      >
        {ButtonIconSelection(IconName)}

        <span>{ButtonText}</span>
      </motion.button>
    </Link>
  );
};

export default Button;
