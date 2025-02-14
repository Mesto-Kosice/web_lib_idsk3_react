import React, { useState } from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';
import { TabBar, TabBarLink } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/TabBar',
  component: TabBar
} as Meta<typeof TabBar>;

export const Default: StoryObj<typeof TabBar> = {
  render: (args) => {
    const [selectedLink, setSelectedLink] = useState<string | null>('ministerstva');

    const isSelected = (link: string) => link === selectedLink;
    const handleClick = (e: React.MouseEvent, link: string) => {
      e.preventDefault();
      setSelectedLink(link);
    };

    return (
      <div style={{ height: '100px' }}>
        <TabBar {...args}>
          <TabBarLink
            href="#"
            selected={isSelected('ministerstva')}
            onClick={(e) => handleClick(e, 'ministerstva')}
          >
            Ministerstvá
          </TabBarLink>
          <TabBarLink
            href="#"
            selected={isSelected('statna sprava')}
            onClick={(e) => handleClick(e, 'statna sprava')}
          >
            Štátna správa
          </TabBarLink>
          <TabBarLink
            href="#"
            selected={isSelected('samosprava')}
            onClick={(e) => handleClick(e, 'samosprava')}
          >
            Samospráva
          </TabBarLink>
        </TabBar>
      </div>
    );
  }
};
