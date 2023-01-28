import React from "react";
import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link className="link" to={"/"}>
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link className="link" to={"/"}>
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link className="link" to={"/"}>
              <li className="sidebarListItem">
                <TrendingUpIcon className="sidebarIcon" />
                Sales
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link className="link" to={"/Users"}>
              <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link className="link" to={"/newUser"}>
              <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon" />
                New User
              </li>
            </Link>
            <Link className="link" to={"/products"}>
              <li className="sidebarListItem">
                <StorefrontIcon className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link className="link" to={"/"}>
              <li className="sidebarListItem">
                <AttachMoneyIcon className="sidebarIcon" />
                Transactions
              </li>
            </Link>
            <Link className="link" to={"/"}>
              <li className="sidebarListItem">
                <BarChartIcon className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link className="link" to={"/"}>
              <li className="sidebarListItem">
                <MailOutlineIcon className="sidebarIcon" />
                Mail
              </li>
            </Link>
            <Link className="link" to={"/"}>
              <li className="sidebarListItem">
                <DynamicFeedIcon className="sidebarIcon" />
                Feedback
              </li>
            </Link>
            <Link className="link" to={"/"}>
              <li className="sidebarListItem">
                <ChatBubbleOutlineIcon className="sidebarIcon" />
                Messages
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <Link className="link" to={"/"}>
              <li className="sidebarListItem">
                <WorkOutlineIcon className="sidebarIcon" />
                Manage
              </li>
            </Link>
            <Link className="link" to={"/"}>
              <li className="sidebarListItem">
                <TrendingUpIcon className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link className="link" to={"/"}>
              <li className="sidebarListItem">
                <ReportIcon className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
