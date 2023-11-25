import React from "react";
import "../App.css";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Button,
  Badge,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Notifications from "@mui/icons-material/Notifications";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { Provider, connect } from "react-redux";
import {
  IPoolStore,
  IStoreProps,
  poolStore,
  storeDispatch,
} from "../redux/poolStore";
import { IOrganization } from "./Types/Types";
import ComplexCard from "./Notifications/ComplexCard";
import Student01 from "../../images/people/Student01.png";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { NotificationTypes } from "../redux/navigationStore";
import NotificationsDrawer from "./Notifications/NotificationsDrawer";
import MenuDrawer from "./MenuDrawer";

interface ISmartphoneContentProps {}

interface ISmartphoneContentState {
  isLegacyItemsExpanded: boolean;
}

class SmartphoneContent extends React.Component<
  ISmartphoneContentProps & IStoreProps,
  ISmartphoneContentState
> {
  constructor(props: ISmartphoneContentProps & IStoreProps) {
    super(props);
    this.state = {
      isLegacyItemsExpanded: false,
    };
  }

  updateDrawerState(anchor?: "left" | "right") {
    storeDispatch.navigation.setIsDrawerOpen(anchor);
    this.setState(
      {
        isLegacyItemsExpanded: false,
      },
      () => {}
    );
  }

  renderLeftDrawer() {
    return (
      <Drawer
        anchor={"left"}
        open={this.props.store.navigation.drawerOpenType === "left"}
        onClose={() => {
          this.updateDrawerState();
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <List
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Menu (None of this is functional)
              </ListSubheader>
            }
            onClick={() => {this.updateDrawerState();}}
          >
          </List>
          <Divider />
          <MenuDrawer 
        updateDrawerState={(anchor?: "left" | "right") => { this.updateDrawerState(anchor);}}/>
          <Divider />
        </Box>
      </Drawer>
    );
  }

  renderRightLegacyItems() {
    return;
  }

  renderRightDrawer() {
    return (
      <Drawer
        anchor={"right"}
        open={this.props.store.navigation.drawerOpenType === "right"}
        onClose={() => {
          this.updateDrawerState();
        }}
      >
        <NotificationsDrawer
        updateDrawerState={(anchor?: "left" | "right") => { this.updateDrawerState(anchor);}}
        />
      </Drawer>
    );
  }

  render() {
    let { store } = this.props;
    return (
      <div style={{ width: 360, height: 640, overflow: "hidden" }}>
        {this.renderLeftDrawer()}
        {this.renderRightDrawer()}
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                this.updateDrawerState("left");
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ width: "100%" }}>
              Community Pool
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                storeDispatch.content.setMainContent(<div>This is where messaging functionality would go</div>)
              }}
            >
              <Badge badgeContent={2} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                this.updateDrawerState("right");
              }}
            >
              <Badge
                badgeContent={store.navigation.notificationsActive.size}
                color="secondary"
              >
                <Notifications />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <div style={{ height: 584, overflow: "auto" }}>
          {this.props.store.content.content}
        </div>
        {/* </Box> */}
      </div>
    );
  }
}

function mapStateToProps(state: IPoolStore): IStoreProps {
  return {
    store: state,
  };
}

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SmartphoneContent);
