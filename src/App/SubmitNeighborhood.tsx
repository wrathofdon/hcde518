import { Button, TextField } from "@mui/material";
import React from "react";

interface ISubmitNeighborhoodState {
    name: string;
    address: string;
    range: string;
    description: string;
    admins: string;
}

export class SubmitNeighborhood extends React.Component<{}, ISubmitNeighborhoodState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            name: "",
            address: "",
            description: "",
            range: "",
            admins: "",
        }
    }

    render() {
        return <div>
        <div
          style={{
            width: "100%",
            padding: 16,
            boxSizing: "border-box",
          }}
        >
                        <h2>
              Propose Neighborhood Center
            </h2>
          <TextField
            label="Name"
            rows={1}
            defaultValue=""
            style={{ width: "100%", marginTop: 8 }}
          />
          <TextField
            multiline
            rows="3"
            label="Description"
            defaultValue=""
            style={{ width: "100%", marginTop: 16 }}
          />
          <TextField
            label="Main address"
            defaultValue=""
            style={{ width: "100%", marginTop: 16 }}
          />
          <TextField
            label="Range"
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
                return;
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    }
}


  
  
//   export class ModalButton extends React.Component<
//     IModalButtonProps,
//     IModalButtonState
//   > {
//     public anchorRef = React.createRef<HTMLDivElement>();
  
//     constructor(props: IModalButtonProps) {
//       super(props);
//       this.state = {
//         isModalOpen: false,
//         text: "",
//       };
//     }
  
//     renderModal() {
//       console.log(this.props.header);
//       return <>
//           <div className={contentStyles.header}>
//             <h2 className={contentStyles.heading}>
//               {this.props.header}
//             </h2>
//             <IconButtonFluent
//               styles={iconButtonStyles}
//               iconProps={{ iconName: 'Cancel' }}
//               ariaLabel="Close popup modal"
//               onClick={() => { this.setState({ isModalOpen: false })}}
//             />
//           </div>
//           {this.props.onRenderModal(() => {
//               this.setState({ isModalOpen: false });
//           })}
//       </>
//     }