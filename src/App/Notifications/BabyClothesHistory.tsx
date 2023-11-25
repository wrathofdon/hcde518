/* eslint-disable jsx-a11y/alt-text */
import { Avatar, Breadcrumbs, Card, Link, Typography } from "@mui/material";
import React from "react";
import ComplexCard from "./ComplexCard";
import { connect } from "react-redux";
import { IPoolStore, IStoreProps } from "../../redux/poolStore";
import SmartphoneContent from "../SmartphoneContent";
import { avatarArrayFemale, avatarPhotoMap } from "../Data/AvatarPhotos";
import box from "../../images/babyclothes/box.jpg";
import baby1 from "../../images/babyclothes/baby1.jpg";
import baby2 from "../../images/babyclothes/baby2.jpg";
import baby3 from "../../images/babyclothes/baby3.jpg";
import baby4 from "../../images/babyclothes/baby4.jpg";
import baby5 from "../../images/babyclothes/baby5.jpg";
import baby6 from "../../images/babyclothes/baby6.jpg";
import baby7 from "../../images/babyclothes/baby7.jpg";
import baby8 from "../../images/babyclothes/baby8.jpg";
import TransferCard from "./TransferCard";

export class BabyClothesHistory extends React.Component<IStoreProps, {}> {
  constructor(props: IStoreProps) {
    super(props);
    this.state = {};
  }

  renderBreadCrumb() {
    return (
      <div style={{ padding: 10 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit">
            Your items
          </Link>
          <Link underline="hover" color="inherit">
            Legacy items
          </Link>
          <Typography color="text.primary">Box of baby clothes</Typography>
        </Breadcrumbs>
      </div>
    );
  }


  render() {
    return (
      <div>
        {this.renderBreadCrumb()}
        <div style={{ padding: 10, fontWeight: 600}}>Item code: #YwZb-TQ68-Tbny-hr57</div>

        <ComplexCard
          title={"Wilma Pratt started an item legacy for 'Box of baby clothes'"}
          avatar={avatarArrayFemale[1]}
          date={new Date("01/14/2019")}
          contents={{
            img: [baby1, box],
            description:
              "Our baby boy has is growing so fast!  Clothes are still in like new condition, ready to be passed down.",
          }}
          comments={[
            "You're such a kind hearted person!",
            "I'm sure the next mother will be so happy to receive these :)",
          ]}
        />

        <TransferCard comments={[]} name1={"Wilma Pratt"} img1={avatarArrayFemale[1]} name2={"Shannon Adams"} img2={avatarArrayFemale[3]} date={new Date("01/19/2020")} itemName="Box of baby clothes"/>

        <ComplexCard
          title={"Shannon Adams posted an update"}
          avatar={avatarArrayFemale[3]}
          date={new Date("01/31/2020")}
          comments={["OMG!"]}
          contents={{
            img: [baby2],
            description: "Thanks again for your generosity, Wilma!",
          }}
        />

        

<TransferCard comments={[]} name1={"Shannon Adams"} img1={avatarArrayFemale[3]} name2={"Olga Baird"} img2={avatarArrayFemale[6]} date={new Date("11/04/2020")}  itemName="Box of baby clothes"/>

        <ComplexCard
          title={"Olga Baird posted an update"}
          avatar={avatarArrayFemale[6]}
          date={new Date("09/14/2020")}
          comments={[]}
          contents={{
            img: [baby3],
            description: "Watching my angel is one of the few things keeping me sane during the pandemic.",
          }}
        />

<TransferCard comments={[]} name1={"Olga Baird"} img1={avatarArrayFemale[6]} name2={"Sherrie Huston"} img2={avatarArrayFemale[23]} date={new Date("01/15/2021")}  itemName="Box of baby clothes"/>

        <ComplexCard
          title={"Sherrie Huston posted an update"}
          avatar={avatarArrayFemale[23]}
          date={new Date("03/23/2021")}
          comments={[]}
          contents={{
            img: [baby4],
            description: "Aw, he looks so happy.",
          }}
        />

<TransferCard comments={[]} name1={"Sherrie Huston"} img1={avatarArrayFemale[23]} name2={"Felicia Powers"} img2={avatarArrayFemale[21]} date={new Date("02/10/2022")}  itemName="Box of baby clothes"/>

        <ComplexCard
          title={"Felicia Powers posted an update"}
          avatar={avatarArrayFemale[21]}
          date={new Date("05/23/2022")}
          comments={[]}
          contents={{
            img: [baby6],
            description: "Adding a few new items to the box.",
          }}
        />

        
<TransferCard comments={[]} name1={"Felicia Powers"} img1={avatarArrayFemale[21]} name2={"You"} img2={avatarPhotoMap.Hidden} date={new Date("01/10/2022")}  itemName="Box of baby clothes"/>

        <ComplexCard
          title={"You posted an update"}
          avatar={avatarPhotoMap.Hidden}
          date={new Date("05/23/2022")}
          comments={[]}
          contents={{
            img: [baby7],
            description: "So grateful to have these clothes",
          }}
        />
        
<TransferCard comments={[]} name1={"You"} img1={avatarPhotoMap.Hidden} name2={"Kristy Dennis"} img2={avatarArrayFemale[19]} date={new Date("01/10/2023")}  itemName="Box of baby clothes"/>
        <ComplexCard
          title={"Kristy Dennis posted an update"}
          avatar={avatarArrayFemale[19]}
          date={new Date("02/23/2023")}
          comments={[]}
          contents={{
            img: [baby8],
            description: "It's a fruity pebbles jacket.",
          }}
        />

        
<TransferCard comments={[]} name1={"Kristy Dennis"} img1={avatarArrayFemale[19]} name2={"Jeanne Barnes"} img2={avatarArrayFemale[15]} date={new Date("01/10/2023")}  itemName="Box of baby clothes"/>
<span id="babyanchor"></span>
        <ComplexCard
          title={"Jeanne Barnes posted an update"}
          avatar={avatarArrayFemale[15]}
          date={new Date("11/23/2023")}
          comments={[]}
          contents={{
            img: [baby5],
            description: "LOL.",
          }}
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