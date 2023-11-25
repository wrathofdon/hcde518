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
import { IPoolStore, IStoreProps } from "../../redux/poolStore";
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

interface IComplexCardProps {
  title: string;
  avatar?: string;
  date: Date;
  share?: boolean;
  contents: {
    img: string[];
    description?: string;
  }
  comments?: string[];
}

interface IComplexCardState {
  isCommentsExpanded: boolean;
  isLiked: boolean;
  comments: ICardComments[];
  addedComment: string;
}

interface ICardComments {
  name: string;
  avatar: string;
  comment: string;
  date: Date;
}

type combinedProps = IComplexCardProps & IStoreProps;

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

class ComplexCard extends React.Component<
combinedProps,
  IComplexCardState
> {

  constructor(props: combinedProps) {
    super(props);
    this.state = {
      isLiked: false,
      isCommentsExpanded: false,
      comments: (this.props.comments || []).map(c => { return this.convertCommentsFromProps(c)}),
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
    this.setState({ isLiked: !this.state.isLiked });
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
    let { comments, isCommentsExpanded, isLiked } = this.state;
    let commentString = "Add comment";
    if (comments?.length) {
       commentString = `${isCommentsExpanded ? "Hide" : "View"} comments (${comments.length})`
    }
    return (
      <Card style={{ maxWidth: 330, marginTop: 15, marginLeft: 15, }}>
        {this.renderCardHeader(this.props.title, this.props.date, this.props.avatar)}
        {this.props.contents.img.map((url, index) => { return <CardMedia
          key={index}
          component="img"
          image={url}
        />
        })}
        {!!this.props.contents.description && <CardContent>
          <Typography variant="body2" color="text.secondary">
            {this.props.contents.description}
          </Typography>
        </CardContent>}
        <CardActions disableSpacing>
          <IconButton aria-label="Like" onClick={this.handleLikeClick}>
            <FavoriteIcon style={{ color: isLiked ? "red" : undefined}}/>
          </IconButton>
          {!!this.props.share && <IconButton aria-label="share" onClick={() => { alert("Pretend this lets you share a link")}}>
            <ShareIcon />
          </IconButton>}
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
        this.setState({
          comments: [...comments, {
            name: "You",
            avatar: avatarPhotoMap.Hidden,
            comment: this.state.addedComment,
            date: new Date(),
          }],
          addedComment: "",
        })
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ComplexCard);
  