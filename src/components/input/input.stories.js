import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import { ClrInput } from 'clarity-react';

storiesOf('ClrInput', module)
   .addWithInfo('with placeholder', () =>
        <ClrInput placeholder="Lorem Ipsum" />
   )
   .addWithInfo('disabled', () =>
        <ClrInput placeholder="Lorem Ipsum" disabled/>
   )
   .addWithInfo('password type', () =>
        <ClrInput type="password" placeholder="Please, enter password" />
   )
   .addWithInfo('date type', () =>
        <ClrInput type="date"/>
   )
   .addWithInfo('datetime-local type', () =>
        <ClrInput type="datetime-local"/>
   )
   .addWithInfo('tel type', () =>
        <ClrInput type="tel"/>
   )
   .addWithInfo('readonly', () =>
        <ClrInput type="text" value="Readonly Text" readOnly/>
   )