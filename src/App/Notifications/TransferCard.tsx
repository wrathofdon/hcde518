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
import { IPoolStore, IStoreProps, poolStore, storeDispatch } from "../../redux/poolStore";
import { connect } from "react-redux";
import { IPersonAbridged, generateRandomFemale, generateRandomMale } from "../Types/Types";
import { TextField, PrimaryButton } from "@fluentui/react";
import { Button } from "@mui/material";
import { avatarPhotoMap } from "../Data/AvatarPhotos";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface ITransferCardProps {
    name1: string,
    img1: string,
    name2: string,
    img2: string,
    comments: string[],
    itemName: string;
    date: Date,
}

interface ITransferCardState {
  isCommentsExpanded: boolean;
  comments: ICardComments[];
  addedComment: string;
}

interface ICardComments {
  name: string;
  avatar: string;
  comment: string;
  date: Date;
}

type combinedProps = ITransferCardProps & IStoreProps;

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const mainTitleStyle: React.CSSProperties = {
    margin: 0,
    fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
    fontWeight: 600,
    fontSize: "0.875rem",
    lineHeight: 1.43,
    letterSpacing: "0.01071em",
}


const mainSubTitleStyle: React.CSSProperties = {
    margin: 0,
    fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.43,
    letterSpacing: "0.01071em",
    color: "rgba(0, 0, 0, 0.6)",
}

class TransferCard extends React.Component<
combinedProps,
  ITransferCardState
> {
  public uniqueId: string;
  public likeCount = Math.floor(Math.random() * 25) + 5;

  constructor(props: combinedProps) {
    super(props);
    this.uniqueId = props.name1 + "-" + props.name2;
    let comments = (this.props.comments || []).map(c => { return this.convertCommentsFromProps(c)});
    let addedComments = this.props.store.content.addedComments[this.uniqueId];
    if (addedComments) { comments = comments.concat(addedComments); }
    this.state = {
      isCommentsExpanded: false,
      comments: comments,
      addedComment: "",
    };
  }

  convertCommentsFromProps(comment: string): ICardComments {
    const isFemale = Math.random() > .3;
    const person = isFemale ? generateRandomFemale() : generateRandomMale();
    return {
      name: person.name,
      avatar: person.photo,
      comment: comment,    
      date: this.props.date,  
    } 
  }

  handleExpandClick = () => {
    this.setState({ isCommentsExpanded: !this.state.isCommentsExpanded });
  };

  handleLikeClick = () => {
    let isLiked = poolStore.getState().content.likedPosts.has(this.uniqueId);
    if (isLiked) { storeDispatch.content.unlikePost(this.uniqueId); }
    else { storeDispatch.content.likePost(this.uniqueId); }
  };

  renderAvatar(title: string, img?: string): JSX.Element {
    if (img) {
      return <Avatar aria-label={title}>
        <img src={img} style={{ height: 40, width: 40, borderRadius: "50%"}}/>
        </Avatar>
    }
    return             <Avatar sx={{ bgcolor: red[500] }} aria-label={title}>
    {title.charAt(0).toUpperCase()}
  </Avatar>

  }

  renderCardHeader(title: string, date: Date, img?: string, ): JSX.Element {
    return         <CardHeader
    avatar={
      this.renderAvatar(title, img)
    }
    title={title}
    subheader={`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}
  />

  }

  

  renderHeader() {
    let {img1, img2, name1, name2, date, itemName}  = this.props;
    return <div style={{ display: "flex", flexDirection: "row", width: "100%", padding: 16, boxSizing: "border-box"}}>
    <Avatar aria-label={name1}>
        <img src={img1} style={{ height: 40, width: 40, borderRadius: "50%"}}/>
        </Avatar>
        <div style={{width: "100%", paddingLeft: 16, paddingRight: 16}}>
            <div style={mainTitleStyle}>{`${name1} gifted ${itemName} to ${name2}`}</div>
            <div style={mainSubTitleStyle}>{`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</div>
        </div>
        <Avatar aria-label={name2}>
        <img src={img2} style={{ height: 40, width: 40, borderRadius: "50%"}}/>
        </Avatar>
    </div>
  }

  renderComment(comment: ICardComments, index: number) {
    let date = comment.date;
    return           <Card     
    style={{ maxWidth: 325, marginLeft: 5, }} key={index}>
    <CardHeader
      avatar={ this.renderAvatar(comment.name, comment.avatar)}
      title={comment.name}
      subheader={`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
{comment.comment}
      </Typography>
    </CardContent></Card>

  }

  
  render() {
    let { comments, isCommentsExpanded } = this.state;
    let isLiked = this.props.store.content.likedPosts.has(this.uniqueId);
    let commentString = "Add comment";
    if (comments?.length) {
       commentString = `${isCommentsExpanded ? "Hide" : "View"} comments (${comments.length})`
    }
    return (
      <Card style={{ maxWidth: 330, marginTop: 15, marginLeft: 15, boxSizing: "border-box", border: "solid 3px green" }}>
        {this.renderHeader()}
        <CardActions disableSpacing>
          <IconButton aria-label="Like" onClick={this.handleLikeClick}>
            <FavoriteIcon style={{ color: isLiked ? "red" : undefined}}/>
          </IconButton>
          <div >{isLiked ? this.likeCount + 1 : this.likeCount}</div>
          <div 
            onClick={this.handleExpandClick} style={{ 
  marginLeft: "auto",}} >{commentString}</div>
          <ExpandMore
            expand={isCommentsExpanded}
            onClick={this.handleExpandClick}
            aria-expanded={isCommentsExpanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={isCommentsExpanded} timeout="auto" unmountOnExit>
          <CardContent>
            {this.state.comments.map((c, i) => { return this.renderComment(c, i)})}
            <TextField
              label="Add comment"
              value={this.state.addedComment}
              onChange={(e, v = "") => {
                this.setState({ addedComment: v});
              }}
      />
      <div style={{ width: "100%", textAlign: "right", paddingTop: 5}}>
      <PrimaryButton disabled={!this.state.addedComment.trim()}
      onClick={() => {
        let newCommentArray = [...comments, {
          name: "You",
          avatar: avatarPhotoMap.Hidden,
          comment: this.state.addedComment,
          date: new Date(),
        }]
        this.setState({
          comments: newCommentArray,
          addedComment: "",
        });
        storeDispatch.content.addComment({ key: this.uniqueId, comments: newCommentArray});
      }}>Submit</PrimaryButton></div>

          </CardContent>
        </Collapse>
      </Card>
    );
  }
}
function mapStateToProps(state: IPoolStore): IStoreProps {
    return {
      store: state,
    };
  }
  
  const mapDispatchToProps = (dispatch: any) => ({});
  
  export default connect(mapStateToProps, mapDispatchToProps)(TransferCard);
  