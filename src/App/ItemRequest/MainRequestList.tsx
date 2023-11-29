import React from "react";
import { IPoolStore, IStoreProps, storeDispatch } from "../../redux/poolStore";
import { IPersonAbridged, IPersonWithRequest } from "../Types/Types";
import {
  Accordion,
  AccordionSummary,
  Button,
  ButtonGroup,
  Card,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Snackbar,
} from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { PeopleWithHistories } from "../Data/People";
import "./ItemRequest.css";
import UserBio from "./UserBio";
import { connect } from "react-redux";
import { PrimaryButton } from "@fluentui/react";
import { PopupButton } from "../Shared/PopupButton";

interface IMainRequestListProps {
}

interface IMainRequestListState {
  userButtonExpanded: boolean;
  snackBar?: {text: string, duration: number}
}

class MainRequestList extends React.Component<
  IMainRequestListProps & IStoreProps,
  IMainRequestListState
> {
  public anchorRef = React.createRef<HTMLDivElement>();
  constructor(props: IMainRequestListProps & IStoreProps) {
    super(props);
    this.state = {
      userButtonExpanded: false,
    };
  }

  
  generateSnackBar(text: string, duration: number = 3000) {
    this.setState({ snackBar: { text: text, duration: duration}});
  }

  renderPerson(person: IPersonWithRequest) {
    
    return <Card style={{ padding: 16, marginTop: 8, marginBottom: 8}} className="UserRequestCard"
    >
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <img src={person.photo} style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 16}}/>
      </div>
      <div style={{ width: "100%", boxSizing: "border-box" }}>
        <strong>{person.name}: </strong> "{person.requestText}"<p/>
        <strong>Availability: </strong> {person.availability}<p/>
        <strong>Transportation: </strong> {person.mobility}
      </div>
    </div>
    <div style={{ textAlign: "right"}}>
      
    <Button onClick={() => {
        storeDispatch.content.setMainContent(<UserBio user={person}/>);
        setTimeout(() => {
          let element = document.getElementById("topanchor");
          element?.scrollIntoView();
        }, 50);
    }} style={{ marginRight: 16}}>{"View profile"}</Button>
    <Button onClick={() => { this.generateSnackBar("Start message app") }}>{"Message"}</Button>

    </div>
  </Card>
  }

  
  renderRequestAccordion(
  ): JSX.Element {
    let keys = Object.keys(PeopleWithHistories);
    let header = `Requests (${keys.length || "None"})`;
    let macGuffenRequestExpanded = this.props.store.content.macGuffenRequestExpanded;
    return (
      <Accordion disabled={!keys.length} expanded={macGuffenRequestExpanded}
      onChange={(a, b) => {
        storeDispatch.content.setMacGuffenRequestExpanded(b);
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={"Requests"}
        //   id={type}
        >
          <Typography>{header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {keys.map((key) => {
            return <>
            <span id={PeopleWithHistories[key].name+ " anchor"}></span>
            {this.renderPerson(PeopleWithHistories[key])}</>
          })}
        </AccordionDetails>
      </Accordion>
    );
  }

  render() {
    let { store } = this.props;
    let macguffen = store.content.macGuffenDescription;
    return (
      <div
        style={{
          fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
          width: 323,
          marginLeft: 16,
          marginTop: 16,
        }}
      >
        <strong>You posted this item 3 days ago:</strong>
        <Card style={{ padding: 16, marginTop: 16, marginBottom: 16}}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "100%" }}>
              <Typography color="text.primary">
                <strong>Title: {macguffen.title}</strong>
              </Typography>
            </div>
            <div>
              <EditIcon style={{ color: "#115ea3"}} onClick={() => { this.generateSnackBar("Pretend this gives you the options to edit the content")}}/>
            </div>
          </div>
          <p/>
          <p/>
          <strong>Description:</strong>
          <img
            src={macguffen.url}
            style={{ width: "100%" }}
          />
          {macguffen.description}

          <p/>
          <div style={{ fontSize: 12}}>
          <div><strong>Share settings: </strong></div>
          <div>Visible to: Friends, Neighbors, Clubs</div>
          <div>Can be shared by: Custom friends list</div></div>
        </Card>
        {this.renderRequestAccordion()}
        
        <div
          style={{
            width: "100%",
            textAlign: "right",
            padding: 16,
            boxSizing: "border-box",
          }}
        >
          <PopupButton options={[
            "Gift item",
            "Pause listing",
            "Edit description",
            "Convert to legacy item",
            "Convert to library item",
            "Unpublish listing",
          ]} label={"Interactions"}/>
        </div>
        <Snackbar
        open={!!this.state.snackBar}
        autoHideDuration={this.state.snackBar?.duration || 3000}
        onClose={() => this.setState({ snackBar: undefined})}
        message={this.state.snackBar?.text || ""}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainRequestList);
