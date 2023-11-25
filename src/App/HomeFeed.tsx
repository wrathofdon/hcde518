import React from "react";
import { IPoolStore, IStoreProps } from "../redux/poolStore";
import { connect } from "react-redux";
import ComplexCard from "./Notifications/ComplexCard";
import { generateRandomFemale, generateRandomGroup, generateRandomMale } from "./Types/Types";
import Mint from "../images/HomeFeed/Mint.jpg";
import VacuumSealer from "../images/HomeFeed/VacuumSealer.jpg";
import RepairCafe from "../images/HomeFeed/RepairCafe.jpg";
import KnifeSharper from "../images/HomeFeed/KnifeSharpener.jpg";
import STEM from "../images/HomeFeed/STEM.jpg";
import BookClub from "../images/HomeFeed/BookClub.jpg";

class HomeFeed extends React.Component<IStoreProps, {}> {

    static defaultContent = HomeFeed.generateContent();

  constructor(props: IStoreProps) {
    super(props);
    this.state = {};
  }

  static generateContent(): JSX.Element {
    let output: JSX.Element[] = [];
    let person = generateRandomFemale();
    output.push(
      <ComplexCard
        uniqueId={"Home" + output.length}
        title={`${person.name} is offering: Fresh mint`}
        avatar={person.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [Mint],
          description:
            "It looks like my garden has been completely overrun.  Just stop by at any time and take as much as you want",
        }}
      />
    );
    output.push(
      <ComplexCard
        uniqueId={"Home" + output.length}
        title={`Springfield Tool Library created a new event: Repair Cafe`}
        //   avatar={person01.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [RepairCafe],
          jsx: (
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
                clothing/textiles. There are no reservations, but an advance
                sign-up (one per person) gives priority over walk-ins or second
                items.{" "}
              </div>
            </>
          ),
        }}
      />
    );
    person = generateRandomMale();
    output.push(
      <ComplexCard
        uniqueId={"Home" + output.length}
        title={`${person.name} is in need of: Vacuum sealer`}
        avatar={person.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [VacuumSealer],
          description:
            "I'm doing some meal prep for a sick relative, and I was wondering if anyone had a vacuum sealer I could borrow.  I promise I'll bring you a bag of homemade dumplings when I'm done.  :)",
        }}
      />
    );
    person = generateRandomFemale();
    output.push(
      <ComplexCard
        uniqueId={"Home" + output.length}
        title={`${person.name} is offering the following to borrow:  Knife Sharpener`}
        avatar={person.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [KnifeSharper],
          description: "It'll probably be a few months before I need to use this again, so let me know if you'd like to try it out.",
        }}
      />
    );
    let group = generateRandomGroup(3, 2);
    output.push(
      <ComplexCard
        uniqueId={"Home" + output.length}
        title={`Springfield STEM Expo sent a thank you note to your friend ${group[3].name} and 4 others`}
        avatar={group[3].photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [STEM],
          description: `The 2023 Expo was another huge success this year with over 100 attendees!  Big shout out to our volunteers who answered the call and made the entire event possible:  ${group[0].name}, ${group[1].name}, ${group[2].name}, ${group[3].name}, and ${group[4].name}`,
        }}
      />
    );
    person = generateRandomFemale();
    output.push(
      <ComplexCard
        uniqueId={"Home" + output.length}
        title={`${person.name} is starting a new club: Springfield Book Lovers`}
        avatar={person.photo}
        date={new Date()}
        comments={[]}
        contents={{
          img: [BookClub],
          description: "Looking for new members who love books as much as I do!",
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

// interface IComplexCardProps {
//   uniqueId: string;
//   title: string;
//   avatar?: string;
//   date: Date;
//   share?: boolean;
//   contents: {
//     img: string[];
//     description?: string;
//   }
//   comments?: string[];
// }

// interface IComplexCardState {
//   isCommentsExpanded: boolean;
//   comments: ICardComments[];
//   addedComment: string;
// }

// interface ICardComments {
//   name: string;
//   avatar: string;
//   comment: string;
//   date: Date;
// }

// type combinedProps = IComplexCardProps & IStoreProps;

// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// class ComplexCard extends React.Component<
// combinedProps,
//   IComplexCardState
// > {
