import { Menu, MenuProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

import mock from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<MenuProps>;

export const Template: Story<MenuProps> = (args) => {
  return (
    <div style={{ maxWidth: '60rem', margin: '5rem auto', padding: '3.2rem' }}>
      <Menu {...args} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu purus
        hendrerit, viverra arcu eleifend, convallis tortor. Morbi eu nunc nec
        nunc suscipit faucibus. Morbi vehicula, libero et efficitur elementum,
        quam libero porta velit, sed lacinia lorem mauris sed sem. Donec
        efficitur ante enim, id rhoncus est sodales a. Duis semper ante
        ultricies risus pellentesque sollicitudin. Vivamus et est ut lorem
        ornare tempus. Sed magna purus, venenatis sit amet aliquam eget,
        porttitor vitae dolor. Aliquam viverra odio vitae hendrerit rutrum.
        Quisque augue ligula, lacinia nec lorem at, lacinia tempor ipsum.
        Vestibulum lacus neque, vehicula ut hendrerit non, iaculis sit amet
        tellus. Duis et arcu sed nisl vestibulum finibus maximus ut nisl. Duis
        pulvinar orci lectus, vel mollis quam porta et. Duis in dictum ex.
        Quisque at ex tempus, egestas erat vitae, auctor dolor. Suspendisse
        tincidunt pretium ultricies. Donec rhoncus at nisl et rhoncus. Quisque
        vel neque neque. Sed porta vel arcu pretium pulvinar. Nullam ut velit
        suscipit, gravida nisi a, fermentum diam. Ut leo orci, lobortis vitae
        elit a, pretium semper enim. Morbi lectus nisl, eleifend in sollicitudin
        et, ultricies rhoncus sapien. Praesent suscipit maximus odio, ac finibus
        lacus elementum at. Nunc venenatis aliquam nulla eu rutrum. Vivamus
        tempor mattis maximus. Nam sit amet orci sodales, vehicula arcu sed,
        placerat urna. Quisque vulputate lorem ut venenatis cursus. Aenean
        dignissim, velit vel varius fermentum, tellus elit egestas lacus, in
        mollis neque elit non mauris. Cras sit amet egestas purus. Aenean
        rhoncus odio vehicula luctus finibus. Ut sit amet elit mi. Morbi in dui
        ipsum. Pellentesque placerat massa urna, quis lobortis est accumsan ac.
        Etiam tempus in diam eu euismod. Integer placerat iaculis lacus, porta
        ultricies mi sollicitudin eu. Praesent mollis magna id blandit
        scelerisque. Donec commodo luctus dui, in facilisis arcu efficitur quis.
        Maecenas finibus lorem in nisl elementum porta. Pellentesque consectetur
        rutrum faucibus. Pellentesque laoreet ante et nibh convallis, sed
        aliquam eros fringilla. Mauris vitae dolor nec tellus vehicula
        ullamcorper. Praesent eu nulla eget ligula congue pretium non sit amet
        metus. Nulla et odio placerat, eleifend magna vel, dictum diam. Sed
        malesuada tellus lacus, aliquam imperdiet felis posuere ac. Cras viverra
        dolor nec lorem mollis aliquam. Donec cursus elit nec massa pretium, et
        imperdiet dolor auctor. Vestibulum ultrices vulputate arcu in imperdiet.
        Nullam vehicula aliquam erat, nec posuere dui interdum at. Nullam
        finibus a orci quis rutrum. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu purus
        hendrerit, viverra arcu eleifend, convallis tortor. Morbi eu nunc nec
        nunc suscipit faucibus. Morbi vehicula, libero et efficitur elementum,
        quam libero porta velit, sed lacinia lorem mauris sed sem. Donec
        efficitur ante enim, id rhoncus est sodales a. Duis semper ante
        ultricies risus pellentesque sollicitudin. Vivamus et est ut lorem
        ornare tempus. Sed magna purus, venenatis sit amet aliquam eget,
        porttitor vitae dolor. Aliquam viverra odio vitae hendrerit rutrum.
        Quisque augue ligula, lacinia nec lorem at, lacinia tempor ipsum.
        Vestibulum lacus neque, vehicula ut hendrerit non, iaculis sit amet
        tellus. Duis et arcu sed nisl vestibulum finibus maximus ut nisl. Duis
        pulvinar orci lectus, vel mollis quam porta et. Duis in dictum ex.
        Quisque at ex tempus, egestas erat vitae, auctor dolor. Suspendisse
        tincidunt pretium ultricies. Donec rhoncus at nisl et rhoncus. Quisque
        vel neque neque. Sed porta vel arcu pretium pulvinar. Nullam ut velit
        suscipit, gravida nisi a, fermentum diam. Ut leo orci, lobortis vitae
        elit a, pretium semper enim. Morbi lectus nisl, eleifend in sollicitudin
        et, ultricies rhoncus sapien. Praesent suscipit maximus odio, ac finibus
        lacus elementum at. Nunc venenatis aliquam nulla eu rutrum. Vivamus
        tempor mattis maximus. Nam sit amet orci sodales, vehicula arcu sed,
        placerat urna. Quisque vulputate lorem ut venenatis cursus. Aenean
        dignissim, velit vel varius fermentum, tellus elit egestas lacus, in
        mollis neque elit non mauris. Cras sit amet egestas purus. Aenean
        rhoncus odio vehicula luctus finibus. Ut sit amet elit mi. Morbi in dui
        ipsum. Pellentesque placerat massa urna, quis lobortis est accumsan ac.
        Etiam tempus in diam eu euismod. Integer placerat iaculis lacus, porta
        ultricies mi sollicitudin eu. Praesent mollis magna id blandit
        scelerisque. Donec commodo luctus dui, in facilisis arcu efficitur quis.
        Maecenas finibus lorem in nisl elementum porta. Pellentesque consectetur
        rutrum faucibus. Pellentesque laoreet ante et nibh convallis, sed
        aliquam eros fringilla. Mauris vitae dolor nec tellus vehicula
        ullamcorper. Praesent eu nulla eget ligula congue pretium non sit amet
        metus. Nulla et odio placerat, eleifend magna vel, dictum diam. Sed
        malesuada tellus lacus, aliquam imperdiet felis posuere ac. Cras viverra
        dolor nec lorem mollis aliquam. Donec cursus elit nec massa pretium, et
        imperdiet dolor auctor. Vestibulum ultrices vulputate arcu in imperdiet.
        Nullam vehicula aliquam erat, nec posuere dui interdum at. Nullam
        finibus a orci quis rutrum. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas.
      </p>
      <br />
    </div>
  );
};
