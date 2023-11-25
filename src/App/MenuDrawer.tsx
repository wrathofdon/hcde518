/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import Collapse from "@mui/material/Collapse";
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
import InboxIcon from "@mui/icons-material/Inbox";
import HomeFeed from "./HomeFeed";

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
  LegacyItems,
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
          storeDispatch.content.setMainContent(<>{`This is where the functionality for ${buttonText} would go.  Unfortunately, this is only a class project, so nothing on the left menu other than "Home" will work`}</>);
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
          {this.createButton("Verification")}
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

  renderLegacyOptions(isExpanded: boolean) {
    return (
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {this.createButton("Browse stories")}
          {this.createButton("Create/Manage")}
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
          storeDispatch.content.setMainContent(HomeFeed.defaultContent);
          this.props.updateDrawerState();
        }}
      >
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary={"Home"} />
      </ListItemButton>
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
      <ListItemButton
        onClick={() => {
          this.setState({
            expandedMenu:
              expandedMenu === OpenItemMenu.LegacyItems
                ? OpenItemMenu.None
                : OpenItemMenu.LegacyItems,
          });
        }}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Legacy items" />
        {expandedMenu === OpenItemMenu.LegacyItems ? (
          <ExpandLess />
        ) : (
          <ExpandMore />
        )}
      </ListItemButton>
      {this.renderLegacyOptions(expandedMenu === OpenItemMenu.LegacyItems)}
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
