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
  TextField,
} from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { PeopleWithHistories } from "../Data/People";
import { connect } from "react-redux";
import { FontWeights, Modal, PrimaryButton, mergeStyleSets } from "@fluentui/react";
import { IconButton as IconButtonFluent, getTheme, mergeStyles } from "@fluentui/react";

interface IModalButtonProps {
  label: string;
  header: string;
  onRenderModal: (dismiss: () => void) => JSX.Element;
}

interface IModalButtonState {
  isModalOpen: boolean;
  text: string;
}


const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
  },
  header: [
    theme.fonts.xLargePlus,
    {
      flex: '1 1 auto',
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 14px 24px',
    },
  ],
  heading: {
    color: theme.palette.neutralPrimary,
    fontWeight: FontWeights.semibold,
    fontSize: 'inherit',
    margin: '0',
  },
  body: {
    flex: '4 4 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: { margin: '14px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },
  },
});
const toggleStyles = { root: { marginBottom: '20px' } };
const iconButtonStyles = {
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px',
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};


export class ModalButton extends React.Component<
  IModalButtonProps,
  IModalButtonState
> {
  public anchorRef = React.createRef<HTMLDivElement>();

  constructor(props: IModalButtonProps) {
    super(props);
    this.state = {
      isModalOpen: false,
      text: "",
    };
  }

  renderModal() {
    console.log(this.props.header);
    return <>
        <div className={contentStyles.header}>
          <h2 className={contentStyles.heading}>
            {this.props.header}
          </h2>
          <IconButtonFluent
            styles={iconButtonStyles}
            iconProps={{ iconName: 'Cancel' }}
            ariaLabel="Close popup modal"
            onClick={() => { this.setState({ isModalOpen: false })}}
          />
        </div>
        {this.props.onRenderModal(() => {
            this.setState({ isModalOpen: false });
        })}
    </>
  }

  render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            textAlign: "right",
            padding: 16,
            boxSizing: "border-box",
          }}
        >
          <Button variant="contained" onClick={() => { this.setState( { isModalOpen: !this.state.isModalOpen})}}>{this.props.label}</Button>
        </div>
        <Modal
          isOpen={this.state.isModalOpen}
          onDismiss={() => {
            this.setState({ isModalOpen: false });
          }}
          isModeless={true}
        >
          {this.renderModal()}
          
        </Modal>
      </div>
    );
  }
}
