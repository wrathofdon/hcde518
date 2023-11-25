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
import { IPoolStore, IStoreProps, storeDispatch } from "../../redux/poolStore";
import { connect } from "react-redux";
import {
  IPersonAbridged,
  generateRandomFemale,
  generateRandomMale,
} from "../Types/Types";
import { TextField, PrimaryButton, getTheme } from "@fluentui/react";
import {
  Badge,
  Box,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
} from "@mui/material";
import { avatarArrayFemale, avatarPhotoMap } from "../Data/AvatarPhotos";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { NotificationTypes } from "../../redux/navigationStore";
import MenuIcon from "@mui/icons-material/Menu";
import Notifications from "@mui/icons-material/Notifications";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { tokens } from "@fluentui/react-theme";
import "./Notifications.css";
import { BabyClothesHistory } from "./BabyClothesHistory";
import { PeopleWithHistories, namesArrayFemale } from "../Data/People";
import MainRequestList from "../ItemRequest/MainRequestList";

interface INotificationsDrawerProps {
    updateDrawerState: (anchor?: "left" | "right") => void;
}

interface INotificationsDrawerState {
  showNewOnly: boolean;
  notifications: INotificationItem[];
}

type combinedProps = INotificationsDrawerProps & IStoreProps;

interface INotificationItem {
    key: string;
    avatar: string;
    text: JSX.Element;
    duration: string;
    onClick: () => void;
}

class NotificationsDrawer extends React.Component<
  combinedProps,
  INotificationsDrawerState
> {
  constructor(props: combinedProps) {
    super(props);
    this.state = {
      showNewOnly: false,
      notifications: [
        {
            key: NotificationTypes.BabyNames,
            avatar: avatarArrayFemale[15],
            text: <><strong>Jeanne Barnes</strong> posted an update to "Box of baby clothes" item: "LOL!"</>,
            duration: "16 minutes ago",
            onClick: () => {
                storeDispatch.content.setMainContent(<BabyClothesHistory store={this.props.store}/>);
                storeDispatch.navigation.removeNotification(NotificationTypes.BabyNames);
                storeDispatch.navigation.setIsDrawerOpen();
                let element = document.getElementById("babyanchor");
                element?.scrollIntoView()
            }
        },
        {
            key: NotificationTypes.MacGuffen,
            avatar: avatarPhotoMap.Student01,
            text: <><strong>{namesArrayFemale[36]}</strong> and four other people are have requested your item, "Used MacGuffen device"</>,
            duration: "2 hours ago",
            onClick: () => {
                storeDispatch.content.setMainContent(<MainRequestList/>);
                storeDispatch.navigation.removeNotification(NotificationTypes.MacGuffen);
                storeDispatch.navigation.setIsDrawerOpen();
            }
        }
        
      ]
    };
  }

  renderHeader() {
    let { store } = this.props;
    let notificationsActive = store.navigation.notificationsActive;
    let notificationStyle: React.CSSProperties = {
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
        color: "rgba(0, 0, 0, 0.6)",
        fontSize: "0.875rem",
        fontWeight: 500,
        marginRight: 16,
        paddingTop: 8,
    }
    let containerStyle: React.CSSProperties = {
        display: "flex", flexDirection: "row",
        padding: 16,
    }
    let selectedStyle: React.CSSProperties = {
        backgroundColor: "#0f6cbd", color: "white"
    }
    if (this.state.showNewOnly) {
      return (
        <div style={containerStyle}>
        <div style={notificationStyle}>Notifications</div>
          <Chip
            label="All"
            variant={"outlined"}
            onClick={() => {
              this.setState({ showNewOnly: false });
            }}
            style={{marginRight: 8}}
          />
          <Chip label="Unread" style={selectedStyle} />
        </div>
      );
    }
    return (
        <div style={containerStyle}>
        <div style={notificationStyle}>Notifications</div>
        <Chip label="All" 
          style={{...selectedStyle, marginRight: 8}} />
        <Chip
          label="Unread"
          variant={"outlined"}
          onClick={() => {
            this.setState({ showNewOnly: true });
          }}
          disabled={!notificationsActive.size}
        />
        </div>
    );
  }

  renderCard(notification: INotificationItem, isRead: boolean) {
    return <><div key={notification.key} className={"notificationCellContainer"} onClick={() => { notification.onClick()}}>
        <div>
            <img src={notification.avatar} style={{ height: 40, width: 40, paddingRight: 8, borderRadius: "50%"}}/>
        </div>
        <div className={"notificationTextContainer"}>
        <div className={isRead ? undefined : "notificationTextIsUnread"}>{notification.text}</div>
        <div className={isRead ? undefined : "notificationDurationIsUnread"}>{notification.duration}</div>
        </div>
    </div><Divider /></>
  }

  render(): React.ReactNode {
    let { store } = this.props;
    let notificationsActive = store.navigation.notificationsActive;
    let babyNamesActive = notificationsActive.has(NotificationTypes.BabyNames);
    let read = this.state.notifications.filter((item) => {return !notificationsActive.has(item.key)});
    let unread = this.state.notifications.filter((item) => {return notificationsActive.has(item.key)});
    
    let sectionStyle: React.CSSProperties = {
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
        color: "rgba(0, 0, 0, 0.6)",
        fontSize: "0.875rem",
        fontWeight: 600,
        width: "100%",
        textAlign: "center",
        padding: 8,
    }
    return (
      <Box sx={{ width: 250 }} role="presentation">
        <List
        >
        {this.renderHeader()}
          <Divider />
          {!!unread.length && <><Divider />
          {unread.map(card => { return this.renderCard(card, false)})}
          </>}
          {!this.state.showNewOnly && read.map(card => { return this.renderCard(card, true)})}

        </List>      </Box>
    );
  }
}
function mapStateToProps(state: IPoolStore): IStoreProps {
  return {
    store: state,
  };
}

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsDrawer);
