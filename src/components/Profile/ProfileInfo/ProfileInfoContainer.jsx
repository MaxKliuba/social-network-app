import StoreContext from "../../../StoreContext";
import ProfileInfo from "./ProfileInfo";

function ProfileInfoContainer(props) {
    return (
        <StoreContext.Consumer>
          {(store) => {
            let state = store.getState().profilePage.userData;
    
            return <ProfileInfo userData={state} />;
          }}
        </StoreContext.Consumer>
      );
}

export default ProfileInfoContainer;