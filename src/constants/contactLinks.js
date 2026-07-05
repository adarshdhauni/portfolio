import { Mail, FileText } from "lucide-react";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

import { SITE_CONFIG } from "./siteConfig";

export const CONTACT_LINKS = [
  {
    label: "Email",
    description: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    external: false,
    icon: Mail,
  },

  {
    label: "GitHub",
    description: "github.com/adarshdhauni",
    href: SITE_CONFIG.github,
    external: true,
    icon: SiGithub,
  },

  {
    label: "LinkedIn",
    description: "linkedin.com/in/adarsh-dhauni-7146903a6",
    href: SITE_CONFIG.linkedin,
    external: true,
    icon: FaLinkedinIn,
  },

  {
    label: "LeetCode",
    description: "leetcode.com/u/Adarsh_49",
    href: SITE_CONFIG.leetcode,
    external: true,
    icon: SiLeetcode,
  },

  {
    label: "Resume",
    description: "Download PDF",
    href: SITE_CONFIG.resume,
    external: false,
    icon: FileText,
  },
];
