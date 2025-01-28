import React, { useState } from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';
import '../../src/styles/idsk3_theme.css';
import { Navigation, NavigationLink, NavigationLinkOption } from '../../src/components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Navigation',
  component: Navigation
} as Meta<typeof Navigation>;

export const Template: StoryObj<typeof Navigation> = {
  render: (args) => {
    const [selectedLink, setSelectedLink] = useState<string | null>('kalendar');

    const isSelected = (link: string) => link === selectedLink;
    const handleClick = (e: React.MouseEvent, link: string) => {
      e.preventDefault();
      setSelectedLink(link);
    };

    return (
      <div style={{ height: '100px' }}>
        <Navigation {...args}>
          <NavigationLink
            linkElement={
              <a href="#" onClick={(e) => handleClick(e, 'spravy')}>
                Správy
              </a>
            }
            alert={5}
            selected={isSelected('spravy')}
          />
          <NavigationLink
            label="Kalendár"
            href="#"
            selected={isSelected('kalendar')}
            onClick={(e) => handleClick(e, 'kalendar')}
          />
          <NavigationLink
            label="Notifikácie"
            title="Zobrazenie zoznamu notifikácií"
            href="#"
            selected={isSelected('notifikacie')}
            onClick={(e) => handleClick(e, 'notifikacie')}
          />
          <NavigationLink label="Ďalšie nástroje">
            <NavigationLinkOption
              label="Register rozhodnutí"
              href="#"
              onClick={(e) => e.preventDefault()}
            />
            <NavigationLinkOption label="eFaktúry" href="#" onClick={(e) => e.preventDefault()} />
            <NavigationLinkOption
              label="eFaktúry"
              href="#"
              onClick={(e) => e.preventDefault()}
              linkElement={<a href="#">CUET</a>}
            />
          </NavigationLink>
        </Navigation>
      </div>
    );
  }
};
