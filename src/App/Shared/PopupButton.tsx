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
import { PrimaryButton } from "@fluentui/react";

interface IPopupButtonProps {
    label: string;
    options: string[];
    onClick?: (option: string) => void;

}

interface IPopupButtonState {
    isButtonExpanded: boolean;

}

export class PopupButton extends React.Component<IPopupButtonProps, IPopupButtonState> {
    
  public anchorRef = React.createRef<HTMLDivElement>();

    constructor(props: IPopupButtonProps) {
        super(props);
        this.state = {
            isButtonExpanded: false,
        }
    }

    
  renderButton() {
    let { isButtonExpanded } = this.state;
    return (
      <ButtonGroup
        variant="contained"
        ref={this.anchorRef}
        aria-label="split button"
      >
        <Button
          size="small"
          aria-controls={isButtonExpanded ? "split-button-menu" : undefined}
          aria-expanded={isButtonExpanded ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={() => {
            this.setState({ isButtonExpanded: !isButtonExpanded });
          }}
        >
          {this.props.label}
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
    );
  }

  renderPopper() {
    let { isButtonExpanded } = this.state;
    let options: string[] = this.props.options;
    return (
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={isButtonExpanded}
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
                  this.setState({ isButtonExpanded: false });
                }}
              >
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      onClick={(event) => {
                        if (this.props.onClick) { this.props.onClick(option); }
                        else { alert(`You selected ${option}`); }
                        this.setState({ isButtonExpanded: false });
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
    return <>
              {this.renderButton()}
          {this.renderPopper()}
    </>
  }

}