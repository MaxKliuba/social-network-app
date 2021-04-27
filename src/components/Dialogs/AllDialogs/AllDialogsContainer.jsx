import StoreContext from "../../../StoreContext";
import AllDialogs from "./AllDialogs";

function AllDialogsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage.dialogsItems;

        return <AllDialogs dialogsItems={state} />;
      }}
    </StoreContext.Consumer>
  );
}

export default AllDialogsContainer;
