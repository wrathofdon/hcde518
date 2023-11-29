import React from "react";
import { IPoolStore, IStoreProps } from "../redux/poolStore";
import { connect } from "react-redux";
import ComplexCard from "./Notifications/ComplexCard";
import {
  generateRandomFemale,
  generateRandomGroup,
  generateRandomMale,
} from "./Types/Types";
import Mint from "../images/HomeFeed/Mint.jpg";
import VacuumSealer from "../images/HomeFeed/VacuumSealer.jpg";
import RepairCafe from "../images/HomeFeed/RepairCafe.jpg";
import KnifeSharper from "../images/HomeFeed/KnifeSharpener.jpg";
import STEM from "../images/HomeFeed/STEM.jpg";
import Crockpot from "../images/HomeFeed/Crockpot.jpg";
import BookClub from "../images/HomeFeed/BookClub.jpg";
import Wedding from "../images/HomeFeed/Wedding.jpg";
import Donuts from "../images/HomeFeed/Donuts.jpg";
import Chair from "../images/HomeFeed/Chair.jpg";
import Apartments from "../images/HomeFeed/Apartments.jpg";
import { ModalButton } from "./Shared/ModalButton";
import { DropdownButton } from "./Shared/DropdownButton";
import { Button, TextField } from "@mui/material";
import { PopupButton } from "./Shared/PopupButton";

interface IHomeFeedState {
  snackbar: string;
}

class HomeFeed extends React.Component<IStoreProps, IHomeFeedState> {
  static defaultContent = HomeFeed.generateContent();

  constructor(props: IStoreProps) {
    super(props);
    this.state = { snackbar: "" };
  }

  static generateGenericForm(buttonText: string, title: string, snackbar: string, description?: string): (generateSnackBar: (text: string, duration?: number | undefined) => void) => JSX.Element {
    return (generateSnackBar: (text: string, duration?: number | undefined) => void) => {
      return (
        <>
          <ModalButton
            label={buttonText}
            onRenderModal={(close: () => void) => {
              return (
                <div>
                  <div
                    style={{
                      width: "100%",
                      padding: 16,
                      boxSizing: "border-box",
                    }}
                  >
                    {!!description && description}
                    <TextField
                      label="Comments"
                      multiline
                      rows={3}
                      defaultValue=""
                      style={{ width: "100%", marginTop: 8 }}
                    />
                    <TextField
                      label="General travel ability/range"
                      defaultValue=""
                      style={{ width: "100%", marginTop: 16 }}
                    />
                    <TextField
                      label="Availability"
                      defaultValue=""
                      style={{ width: "100%", marginTop: 16 }}
                    />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      padding: 16,
                      boxSizing: "border-box",
                      textAlign: "right",
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => {
                        close();
                        generateSnackBar(snackbar);
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              );
            }}
            header={title}
          />
        </>
      );
    };
  }

  static generateContent(): JSX.Element {
    let output: JSX.Element[] = [];
    let person = generateRandomFemale();
    output.push(
      <ComplexCard
        share={true}
        uniqueId={"Home" + output.length}
        title={`${person.name} is gifting: 3qt Crockpot`}
        avatar={person.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [Crockpot],
          descriptionArray:
            ["Does anyone want this?", "Travel distance:  Roughly 5-10 minutes by car"],
          jsx: HomeFeed.generateGenericForm("Request", "Request: Crockpot", "Request submitted"),
        }}
      />
    );
    person = generateRandomMale();
    output.push(
      <ComplexCard
      share={true}
        uniqueId={"Home" + output.length}
        title={`${person.name} is gifting: Fresh mint`}
        avatar={person.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [Mint],
          descriptionArray: [
              "It looks like my garden has been completely overrun.  Just stop by at any time and take as much as you want", "Travel distance:  Roughly 30-45 minutes by car"],
          jsx: HomeFeed.generateGenericForm("Request", "Request: Fresh Mint", "Request submitted"),
        }}
      />
    );
    output.push(
      <ComplexCard
      share={true}
        uniqueId={"Home" + output.length}
        title={`Springfield Tool Library created a new event: Repair Cafe`}
        //   avatar={person01.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [RepairCafe],
          jsx: (generateSnackbar) => (
            <>
              <div>
                <strong>This saturday from 10am-2pm!</strong>
              </div>
              <div>
                At free community repair events, skilled volunteer "fixers" try
                to repair and mend your small household and personal items.items
                that can potentially be worked on include household and personal
                items that are small enough to be carried in by one person,
                including certain electronics, small furniture and
                clothing/textiles.
              </div>
              <ModalButton
                label={"RSVP"}
                onRenderModal={(close: () => void) => {
                  return (
                    <div>
                      <div
                        style={{
                          width: "100%",
                          padding: 16,
                          boxSizing: "border-box",
                        }}
                      >
                        There are no reservations, but an advance sign-up (one
                        per person) gives priority over walk-ins or second
                        items.
                        <TextField
                          id="outlined-multiline-static"
                          label="Add comments/Requests"
                          multiline
                          rows={4}
                          defaultValue=""
                          style={{ width: "100%", marginTop: 16 }}
                        />
                      </div>
                      <div
                        style={{
                          width: "100%",
                          padding: 16,
                          boxSizing: "border-box",
                          textAlign: "right",
                        }}
                      >
                        <PopupButton
                          label={"RSVP Options"}
                          options={["Going", "Maybe", "Unavailable", "Cancel"]}
                          onClick={(option) => {
                            close();
                            if (option !== "Cancel") {
                              generateSnackbar(`RSVP submitted: ${option}`);
                            }
                          }}
                        />
                      </div>
                    </div>
                  );
                }}
                header={"RSVP For Repair Event"}
              />
            </>
          ),
        }}
      />
    );
    person = generateRandomMale();
    output.push(
      <ComplexCard
      share={true}
        uniqueId={"Home" + output.length}
        title={`${person.name} is in need of: Vacuum sealer`}
        avatar={person.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [VacuumSealer],
          description:
            "I'm doing some meal prep for a sick relative, and I was wondering if anyone had a vacuum sealer I could borrow.  I promise I'll bring you a bag of homemade dumplings when I'm done.  :)",
          jsx: HomeFeed.generateGenericForm("Fulfill", "Fulfill Request: Vacuum Sealer", "Offer submitted"),
        }}
      />
    );
    person = generateRandomFemale();
    output.push(
      <ComplexCard
      share={true}
        uniqueId={"Home" + output.length}
        title={`${person.name} is added to library:  Knife Sharpener`}
        avatar={person.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [KnifeSharper],
          description:
            "It'll probably be a few months before I need to use this again, so let me know if you'd like to try it out.",
          jsx: HomeFeed.generateGenericForm("Request", "Request to borrow: Knife Sharpener", "Request submitted", "Please let us know how experienced you are with these types of tools and how long you intend to borrow this"),
        }}
      />
    );
    let group = generateRandomGroup(3, 2);
    output.push(
      <ComplexCard
      share={true}
        uniqueId={"Home" + output.length}
        title={`Springfield STEM Expo sent a thank you note to your friend ${group[3].name} and 4 others`}
        avatar={group[3].photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [STEM],
          description: `The 2023 Expo was another huge success this year with over 100 attendees!  Big shout out to our volunteers who answered the call and made the entire event possible:  ${group[0].name}, ${group[1].name}, ${group[2].name}, ${group[3].name}, and ${group[4].name}`,
          jsx: HomeFeed.generateGenericForm("Volunteer", "Volunteer signups for STEM Export", "Form submitted", "We will keep you posted for future volunteer opportunities"),
        }}
      />
    );
    person = generateRandomFemale();
    output.push(
      <ComplexCard
      share={true}
        uniqueId={"Home" + output.length}
        title={`${person.name} is starting a new neighborhood group: Springfield Apartments`}
        avatar={person.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [Apartments],
          description:
            "Lately it seems like people are afraid to leave their homes because of all the crime, so I thought that this would be a good way for us to get to know each other a little better.",
          
          jsx: HomeFeed.generateGenericForm("Request to Join", "Request to Join: Springfield Apartments", "Request submitted", "Let's try to plan a meeting so we can all be introduced to one-another soon!"),
        }}
      />
    );
    person = generateRandomFemale();
    output.push(
      <ComplexCard
      share={true}
        uniqueId={"Home" + output.length}
        title={`${person.name} is in need of: Basic household goods`}
        avatar={person.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [],
          description:
            "I'm trying to help out a friend who just got out of a toxic relationship.  We're currently applying for financial assistance, but she could use some help settling down in her new place for her and her kids.  Anything helps:  Furnitures, kitchenware, food, clothing, etc.",     
          jsx: HomeFeed.generateGenericForm("Fulfill", "Fulfill request: Basic household goods", "Form submitted"),
        }}
      />
    );
    person = generateRandomFemale();
    output.push(
      <ComplexCard
        share={true}
        uniqueId={"Home" + output.length}
        title={`${person.name} is starting a legacy item: Wedding Dress`}
        avatar={person.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [Wedding],
          description:
            "Happily married with no intention of ever wearing this again, hoping to help the next lucky lady.  Size 2.",
          jsx: HomeFeed.generateGenericForm("Request", "Request: Wedding dress", "Request submitted"),
        }}
      />
    );
    person = generateRandomMale();
    output.push(
      <ComplexCard
      share={true}
        uniqueId={"Home" + output.length}
        title={`${person.name} would like to try: Electric Scooter`}
        avatar={person.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [],
          description:
            "Hi everyone, I'm interested in getting an electric scooter to reduce carbon footprint, but I'm a little nervous because I've never used one before.  Is there anyone nearby who has one they can let me demo?",
          
            jsx: HomeFeed.generateGenericForm("Fulfill", "Fulfill Request: Electric scooter", "Offer submitted"),
        }}
      />
    );
    person = generateRandomFemale();
    output.push(
      <ComplexCard
      share={true}
        uniqueId={"Home" + output.length}
        title={`${person.name} is starting a new club: Springfield Book Lovers`}
        avatar={person.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [BookClub],
          description:
            "Looking for new members who love books as much as I do!",
          
          jsx: HomeFeed.generateGenericForm("Signup", "Signups for Springfield Book Lovers", "Form submitted", "Please let us know some of your favorite books, and if you have any suggestions for meeting locations"),
        }}
      />
    );
    person = generateRandomMale();
    output.push(
      <ComplexCard
      share={true}
        uniqueId={"Home" + output.length}
        title={`${person.name} is flash gifting: Donuts`}
        avatar={person.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [Donuts],
          description:
            "Please pickup while they're still fresh.  EDIT:  No longer taking requests, pending pickup.",
          
          jsx: () => {
            return <div>
              <div
                style={{
                  width: "100%",
                  textAlign: "right",
                  padding: 16,
                  boxSizing: "border-box",
                }}
              >
                <Button variant="contained" disabled={true}>{"Request"}</Button>
              </div>
            </div>
          },
        }}
      />
    );
    person = generateRandomFemale();
    output.push(
      <ComplexCard
      share={true}
        uniqueId={"Home" + output.length}
        title={`${person.name} is gifting: Vintage chair`}
        avatar={person.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [Chair],
          description:
            "Very comfortable.",
            jsx: HomeFeed.generateGenericForm("Request", "Request: Vintage chair", "Request submitted"),
        }}
      />
    );

    return <>{output}</>;
  }

  render() {
    return this.props.store.content.content;
  }
}

function mapStateToProps(state: IPoolStore): IStoreProps {
  return {
    store: state,
  };
}

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed);
