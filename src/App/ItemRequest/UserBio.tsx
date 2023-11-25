/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { IPoolStore, IStoreProps, storeDispatch } from "../../redux/poolStore";
import { IPersonAbridged, IPersonWithRequest } from "../Types/Types";
import {
  Accordion,
  AccordionSummary,
  Breadcrumbs,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Link,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { connect } from "react-redux";
import MainRequestList from "./MainRequestList";

interface IUserBioProps {
  user: IPersonWithRequest;
}

interface IUserBioState {
  friendTestimonialExpanded: boolean;
  neighborTestimonialExpanded: boolean;
  userButtonExpanded: boolean;
}

class UserBio extends React.Component<IUserBioProps & IStoreProps, IUserBioState> {
  public anchorRef = React.createRef<HTMLDivElement>();
  constructor(props: IUserBioProps & IStoreProps) {
    super(props);
    this.state = {
      friendTestimonialExpanded: false,
      neighborTestimonialExpanded: false,
      userButtonExpanded: false,
    };
  }

  

  renderBreadCrumb() {
    return (
      <div style={{ paddingBottom: 10 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" onClick={async () => {
            
            storeDispatch.content.setMainContent(<MainRequestList/>);
            setTimeout(() => {
              let element = document.getElementById(this.props.user.name + " anchor");
              element?.scrollIntoView();
            }, 150);
          }}>
            Item requests
          </Link>
          <Typography color="text.primary">
            {this.props.user.name}</Typography>
        </Breadcrumbs>
      </div>
    );
  }

  renderTestimonial(person: IPersonAbridged, vouch: string) {
    return (
      <div
        style={{
          padding: 16,
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div>
          <img
            src={person.photo}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              marginRight: 16,
            }}
          />
        </div>
        <div>
          <strong>{person.name}: </strong>
          {vouch}
        </div>
      </div>
    );
  }

  renderTestimonialAccordion(
    type: string,
    array: { person: IPersonAbridged; vouch: string }[]
  ): JSX.Element {
    let header = `${type} testimonials (${array.length || "None"})`;
    return (
      <Accordion disabled={!array.length}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={type}
          id={type}
        >
          <Typography>{header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {array.map((p) => {
            return this.renderTestimonial(p.person, p.vouch);
          })}
        </AccordionDetails>
      </Accordion>
    );
  }

  renderButton() {
    let { userButtonExpanded } = this.state;
    return (
      <ButtonGroup
        variant="contained"
        ref={this.anchorRef}
        aria-label="split button"
      >
        <Button
          size="small"
          aria-controls={userButtonExpanded ? "split-button-menu" : undefined}
          aria-expanded={userButtonExpanded ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={() => {
            this.setState({ userButtonExpanded: !userButtonExpanded });
          }}
        >
          Interactions
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
    );
  }

  renderPopper() {
    let { userButtonExpanded } = this.state;
    let options: string[] = [
      "Message",
      "Vouch",
      "Request vouch",
      "Report",
      "Block",
    ];
    return (
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={userButtonExpanded}
        anchorEl={this.anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              backgroundColor: "#b4d6fa",
              transformOrigin:
                placement === "bottom" ? "center top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener
                onClickAway={() => {
                  this.setState({ userButtonExpanded: false });
                }}
              >
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      onClick={(event) => {
                        alert(`You selected ${option}`);
                        this.setState({ userButtonExpanded: false });
                      }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );
  }

  render() {
    let { store, user } = this.props;
    return (<><span id={"topanchor"}></span>
      <div
        style={{
          fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
          padding: 16,
        }}
      >
        {this.renderBreadCrumb()}
        <img src={user.photo} style={{ width: "100%" }} />
        <div style={{ fontSize: 24, fontWeight: 600 }}>{user.name}</div>
        {user.description}
        <p />
        {this.renderTestimonialAccordion("Friend", user.verifiedFriends)}
        {this.renderTestimonialAccordion("Neighbor", user.verifiedNeighbors)}
        <p />
        <strong>Neighborhoods:</strong>
        {!user.neighborhoods.length && <>None</>}
        {user.neighborhoods.map((name) => {
          return <div>{name}</div>;
        })}
        <p />
        <strong>Local Clubs:</strong>
        {!user.clubs?.length && <>None</>}
        {user.clubs?.map((name) => {
          return <div>{name}</div>;
        })}
        <p />
        <strong>Local Non-Profits/Charities:</strong>
        {!user.nonprofits?.length && <>None</>}
        {user.nonprofits?.map((name) => {
          return <div>{name}</div>;
        })}
        <p />
        <strong>Pool history:</strong>
        <div>{`Items offered: ${user.itemsOffered}`}</div>
        <div>{`Items gifted: ${user.itemsGiven}`}</div>
        <div>{`Items available for lending: ${user.itemsAvailableForLending}`}</div>
        <div>{`Items lended: ${user.itemsLended}`}</div>
        <div>{`Items requested: ${user.itemsRequested}`}</div>
        <div>{`Items received: ${user.itemsReceived}`}</div>
        <div>{`Items borrowed: ${user.itemsReturned}`}</div>
        <div>{`Items returned: ${user.itemsReturned}`}</div>
        <div>{`Complaints on punctuality: ${
          user.recentPunctualityComplaints || "None"
        }`}</div>
        <div>{`Verified donations: $${user.donations}`}</div>
        <div>{`Verified volunteer hours: ${user.volunteerHours}`}</div>
        <div
          style={{
            width: "100%",
            textAlign: "right",
            padding: 16,
            boxSizing: "border-box",
          }}
        >
          {this.renderButton()}
          {this.renderPopper()}
        </div>
      </div></>
    );
  }
}


function mapStateToProps(state: IPoolStore): IStoreProps {
  return {
    store: state,
  };
}

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserBio);
