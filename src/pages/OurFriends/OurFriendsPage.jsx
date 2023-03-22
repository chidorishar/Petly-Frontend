import { useEffect } from 'react';
import getFriends from 'redux/hooks/getFriends';
import FriendsList from 'components/FriendsList/FriendsList';
import { Section } from 'components/common';
import { useState } from 'react';

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const ourFriends = () => {
      (async () => {
        const newsArray = await getFriends();
        const { services } = newsArray;
        setFriends(services);
      })();
    };
    ourFriends();
  }, []);

  return (
    <Section>
      <FriendsList friends={friends} />
    </Section>
  );
};

export default OurFriendsPage;
