/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IPoolStore, IStoreProps, storeDispatch } from "../redux/poolStore";
import { connect } from "react-redux";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { NotificationTypes } from "../redux/navigationStore";
import MenuIcon from "@mui/icons-material/Menu";
import Notifications from "@mui/icons-material/Notifications";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { tokens } from "@fluentui/react-theme";
import { BabyClothesHistory } from "./Notifications/BabyClothesHistory";
import { PeopleWithHistories, namesArrayFemale } from "./Data/People";
import MainRequestList from "./ItemRequest/MainRequestList";

interface IMenuDrawerProps {
  updateDrawerState: (anchor?: "left" | "right") => void;
}

interface IMenuDrawerState {
  expandedMenu: OpenItemMenu;
}

enum OpenItemMenu {
  None,
  Items,
  Community,
  Events,
  Library,
  Account,
}

type combinedProps = IMenuDrawerProps & IStoreProps;

class MenuDrawer extends React.Component<combinedProps, IMenuDrawerState> {
  constructor(props: combinedProps) {
    super(props);
    this.state = {
      expandedMenu: OpenItemMenu.None,
    };
  }

  createButton(buttonText: string, icon: JSX.Element = <StarBorder />) {
    return (
      <ListItemButton
        sx={{ pl: 4 }}
        onClick={() => {
          alert(
            `You pressed the button for ${buttonText}.  This is still a prototype.  Nothing on the left menu is currently functional.`
          );
          this.props.updateDrawerState();
        }}
      >
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary={buttonText} />
      </ListItemButton>
    );
  }

  renderAccountOptions(isExpanded: boolean) {
    return (
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {this.createButton("Edit profile")}
          {this.createButton("Settings")}
          {this.createButton("View History")}
          {this.createButton("Payment/Billing")}
        </List>
      </Collapse>
    );
  }

  renderItemOptions(isExpanded: boolean) {
    return (
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {this.createButton("Latest offers")}
          {this.createButton("Create offer")}
          {this.createButton("Create request")}
          {this.createButton("Search listings")}
          {this.createButton("View history")}
        </List>
      </Collapse>
    );
  }

  renderCommunityOptions(isExpanded: boolean) {
    return (
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {this.createButton("Contacts")}
          {this.createButton("Friends")}
          {this.createButton("Neighbors")}
          {this.createButton("Neighborhood")}
          {this.createButton("Organizations")}
          {this.createButton("Clubs & Hobbies")}
        </List>
      </Collapse>
    );
  }

  renderEventOptions(isExpanded: boolean) {
    return (
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {this.createButton("Browse listings")}
          {this.createButton("Create events")}
          {this.createButton("Personal calendar")}
          {this.createButton("Past events")}
        </List>
      </Collapse>
    );
  }

  renderLibraryOptions(isExpanded: boolean) {
    return (
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {this.createButton("Browse listings")}
          {this.createButton("Create/Manage")}
          {this.createButton("View History")}
        </List>
      </Collapse>
    );
  }

  render(): React.ReactNode {
    let { store } = this.props;
    let { expandedMenu } = this.state;
    return (
      <List>
      <ListItemButton
        onClick={() => {
          this.setState({
            expandedMenu:
              expandedMenu === OpenItemMenu.Account
                ? OpenItemMenu.None
                : OpenItemMenu.Account,
          });
        }}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
        {expandedMenu === OpenItemMenu.Account ? (
          <ExpandLess />
        ) : (
          <ExpandMore />
        )}
      </ListItemButton>
      {this.renderAccountOptions(expandedMenu === OpenItemMenu.Account)}
        <ListItemButton
          onClick={() => {
            this.setState({
              expandedMenu:
                expandedMenu === OpenItemMenu.Items
                  ? OpenItemMenu.None
                  : OpenItemMenu.Items,
            });
          }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Gifting" />
          {expandedMenu === OpenItemMenu.Items ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )}
        </ListItemButton>
        {this.renderItemOptions(expandedMenu === OpenItemMenu.Items)}
        <ListItemButton
          onClick={() => {
            this.setState({
              expandedMenu:
                expandedMenu === OpenItemMenu.Community
                  ? OpenItemMenu.None
                  : OpenItemMenu.Community,
            });
          }}
        >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Community" />
        {expandedMenu === OpenItemMenu.Community ? (
          <ExpandLess />
        ) : (
          <ExpandMore />
        )}
      </ListItemButton>
      {this.renderCommunityOptions(expandedMenu === OpenItemMenu.Community)}
      <ListItemButton
          onClick={() => {
            this.setState({
              expandedMenu:
                expandedMenu === OpenItemMenu.Events
                  ? OpenItemMenu.None
                  : OpenItemMenu.Events,
            });
          }}
        >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Events" />
        {expandedMenu === OpenItemMenu.Events ? (
          <ExpandLess />
        ) : (
          <ExpandMore />
        )}
      </ListItemButton>
      {this.renderEventOptions(expandedMenu === OpenItemMenu.Events)}
      <ListItemButton
          onClick={() => {
            this.setState({
              expandedMenu:
                expandedMenu === OpenItemMenu.Library
                  ? OpenItemMenu.None
                  : OpenItemMenu.Library,
            });
          }}
        >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Library" />
        {expandedMenu === OpenItemMenu.Library ? (
          <ExpandLess />
        ) : (
          <ExpandMore />
        )}
      </ListItemButton>
      {this.renderLibraryOptions(expandedMenu === OpenItemMenu.Library)}
      </List>
    );
  }
}
function mapStateToProps(state: IPoolStore): IStoreProps {
  return {
    store: state,
  };
}

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer);
