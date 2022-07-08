import * as Styled from './styles';

import { useState } from 'react';
import { loadPosts, LoadPostsVariables } from '../../api/load-posts';
import PostGrid from '../../components/PostGrid';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
  variables?: LoadPostsVariables;
};
export const PostsTemplate = ({
  settings,
  posts = [],
  variables,
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);
  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);
    const newVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    };
    const morePosts = await loadPosts(newVariables);
    if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
      setNoMorePosts(true);
      return;
    }
    setButtonDisabled(true);
    setStateVariables(newVariables);
    setStatePosts((p) => [...p, ...morePosts.posts]);
  };

  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={statePosts} />
      <Styled.ButtonContainer>
        <Styled.Button onClick={handleLoadMorePosts} disabled={buttonDisabled}>
          {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
        </Styled.Button>
      </Styled.ButtonContainer>
    </BaseTemplate>
  );
};
export default PostsTemplate;
