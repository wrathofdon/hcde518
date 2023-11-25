import { Dropdown, IDropdownOption } from "@fluentui/react";
import React from "react";


interface IDropdownButtonProps {
  label: string;
  options: string[];
}

interface IDropdownButtonState {
  selectedItem?: IDropdownOption<any>;
}

export class DropdownButton extends React.Component<
IDropdownButtonProps,
IDropdownButtonState
> {
  public anchorRef = React.createRef<HTMLDivElement>();

  constructor(props: IDropdownButtonProps) {
    super(props);
    this.state = {
    };
  }

  getOptions() {
    return this.props.options.map((o) => { return {
        key: o,
        text: o,
    } })
  }

  render() {
    return (
        <Dropdown
          label="Controlled example"
          selectedKey={this.state.selectedItem?.key || undefined}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={() => {

          }}
          placeholder="Select an option"
          options={this.getOptions()}
        />
    );
  }
}
