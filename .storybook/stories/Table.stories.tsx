import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Table, TableRow, TableRowValue, TextButton, TableHeadValue } from '../../src/components';
import { MoreVertIcon, DownloadIcon, AddIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/Table',
  component: Table
} as Meta<typeof Table>;

export const Default = {
  args: {
    headRow: (
      <>
        <TableHeadValue>Názov</TableHeadValue>
        <TableHeadValue>Podpísané</TableHeadValue>
        <TableHeadValue>Podpis</TableHeadValue>
        <TableHeadValue align="right">Akcie</TableHeadValue>
      </>
    ),
    children: (
      <>
        <TableRow>
          <TableRowValue>Martin Mucha</TableRowValue>
          <TableRowValue>19.1.2022 o 15:32</TableRowValue>
          <TableRowValue>
            <a href="#" className="idsk-link-m font-bold">
              Detail podpisu
            </a>
          </TableRowValue>
          <TableRowValue align="right">
            <button>
              <MoreVertIcon className="w-6 h-6" />
            </button>
          </TableRowValue>
        </TableRow>
        <TableRow>
          <TableRowValue>Martin Mucha</TableRowValue>
          <TableRowValue>19.1.2022 o 15:32</TableRowValue>
          <TableRowValue>
            <a href="#" className="idsk-link-m font-bold">
              Detail podpisu
            </a>
          </TableRowValue>
          <TableRowValue align="right">
            <button>
              <MoreVertIcon className="w-6 h-6" />
            </button>
          </TableRowValue>
        </TableRow>
      </>
    )
  }
};

export const Attachments = {
  args: {
    headRowBordered: true,
    headRow: (
      <>
        <TableHeadValue>Názov</TableHeadValue>
        <TableHeadValue>Pridané</TableHeadValue>
        <TableHeadValue>Podpis</TableHeadValue>
        <TableHeadValue align="right">Akcie</TableHeadValue>
      </>
    ),
    children: (
      <>
        <TableRow>
          <TableRowValue>
            <a className="idsk-link-m" href="#">
              Príloha.pdf
            </a>
          </TableRowValue>
          <TableRowValue>19.1.2022 o 15:32</TableRowValue>
          <TableRowValue>
            <a href="#" className="idsk-link-m font-bold">
              Podpísať
            </a>
          </TableRowValue>
          <TableRowValue align="right">
            <button>
              <DownloadIcon className="w-6 h-6" />
            </button>
            <button>
              <MoreVertIcon className="w-6 h-6" />
            </button>
          </TableRowValue>
        </TableRow>
        <TableRow>
          <TableRowValue>
            <a className="idsk-link-m" href="#">
              Príloha.pdf
            </a>
          </TableRowValue>
          <TableRowValue>19.1.2022 o 15:32</TableRowValue>
          <TableRowValue>
            <a href="#" className="idsk-link-m font-bold">
              Podpísať
            </a>
          </TableRowValue>
          <TableRowValue align="right">
            <button>
              <DownloadIcon className="w-6 h-6" />
            </button>
            <button>
              <MoreVertIcon className="w-6 h-6" />
            </button>
          </TableRowValue>
        </TableRow>
      </>
    )
  }
};

export const WithoutSignatures = {
  args: {
    headRow: (
      <>
        <TableHeadValue>Názov</TableHeadValue>
        <TableHeadValue>Pridané</TableHeadValue>
        <TableHeadValue align="right">Akcie</TableHeadValue>
      </>
    ),
    children: (
      <>
        <TableRow>
          <TableRowValue>
            <a className="idsk-link-m" href="#">
              Príloha.pdf
            </a>
          </TableRowValue>
          <TableRowValue>19.1.2022 o 15:32</TableRowValue>
          <TableRowValue align="right">
            <button>
              <MoreVertIcon className="w-6 h-6" />
            </button>
          </TableRowValue>
        </TableRow>
        <TableRow>
          <TableRowValue>
            <a className="idsk-link-m" href="#">
              Príloha.pdf
            </a>
          </TableRowValue>
          <TableRowValue>19.1.2022 o 15:32</TableRowValue>
          <TableRowValue align="right">
            <button>
              <MoreVertIcon className="w-6 h-6" />
            </button>
          </TableRowValue>
        </TableRow>
      </>
    )
  }
};

export const HeadingAndAction = {
  args: {
    heading: 'Prílohy',
    headRow: (
      <>
        <TableHeadValue>Názov</TableHeadValue>
        <TableHeadValue>Pridané</TableHeadValue>
        <TableHeadValue>Podpis</TableHeadValue>
        <TableHeadValue align="right">Akcie</TableHeadValue>
      </>
    ),
    actions: <TextButton label="Pridať prílohu" icon={<AddIcon />} />,
    children: (
      <>
        <TableRow>
          <TableRowValue>
            <a className="idsk-link-m" href="#">
              Príloha.pdf
            </a>
          </TableRowValue>
          <TableRowValue>19.1.2022 o 15:32</TableRowValue>
          <TableRowValue>
            <a href="#" className="idsk-link-m font-bold">
              Podpísať
            </a>
          </TableRowValue>
          <TableRowValue align="right">
            <button>
              <DownloadIcon className="w-6 h-6" />
            </button>
            <button>
              <MoreVertIcon className="w-6 h-6" />
            </button>
          </TableRowValue>
        </TableRow>
        <TableRow>
          <TableRowValue>
            <a className="idsk-link-m" href="#">
              Príloha.pdf
            </a>
          </TableRowValue>
          <TableRowValue>19.1.2022 o 15:32</TableRowValue>
          <TableRowValue>
            <a href="#" className="idsk-link-m font-bold">
              Podpísať
            </a>
          </TableRowValue>
          <TableRowValue align="right">
            <button>
              <DownloadIcon className="w-6 h-6" />
            </button>
            <button>
              <MoreVertIcon className="w-6 h-6" />
            </button>
          </TableRowValue>
        </TableRow>
      </>
    )
  }
};

export const OnlyRows = {
  args: {
    children: (
      <>
        <TableRow>
          <TableRowValue>
            <a className="idsk-link-m" href="#">
              Príloha.pdf
            </a>
          </TableRowValue>
          <TableRowValue>19.1.2022 o 15:32</TableRowValue>
          <TableRowValue>
            <a href="#" className="idsk-link-m font-bold">
              Podpísať
            </a>
          </TableRowValue>
          <TableRowValue align="right">
            <button>
              <DownloadIcon className="w-6 h-6" />
            </button>
            <button>
              <MoreVertIcon className="w-6 h-6" />
            </button>
          </TableRowValue>
        </TableRow>
        <TableRow>
          <TableRowValue>
            <a className="idsk-link-m" href="#">
              Príloha.pdf
            </a>
          </TableRowValue>
          <TableRowValue>19.1.2022 o 15:32</TableRowValue>
          <TableRowValue>
            <a href="#" className="idsk-link-m font-bold">
              Podpísať
            </a>
          </TableRowValue>
          <TableRowValue align="right">
            <button>
              <DownloadIcon className="w-6 h-6" />
            </button>
            <button>
              <MoreVertIcon className="w-6 h-6" />
            </button>
          </TableRowValue>
        </TableRow>
      </>
    )
  }
};
