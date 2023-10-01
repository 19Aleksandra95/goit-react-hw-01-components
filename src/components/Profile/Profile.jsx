import { Wrapper, Photo, List, ListItem } from "./Profile.styled";


export const Profile = ({ user: {username, tag, location, avatar, stats: {followers, views, likes}} }) => {

    return (
        <div className="profile">
  <Wrapper>
    <Photo
      src={avatar}
      alt={username}
    />

    <p>{username}</p>
    <p >{tag}</p>
    <p>{location}</p>
    </Wrapper>

  <List>
    <ListItem>
      <span>Followers</span>
      <span>{followers}</span>
    </ListItem>
    <ListItem>
      <span>Views</span>
      <span>{views}</span>
    </ListItem>
    <ListItem>
      <span>Likes</span>
      <span>{likes}</span>
    </ListItem>
  </List>
</div>
    )

}

