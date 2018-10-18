/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

import {DesktopCapturer} from 'electron';
import {Supportedi18nStrings} from '../../dist/interfaces/';
import * as environment from '../../dist/js/environment';

import {amplify as _amplify, wire as _wire, z as _z} from '../interfaces/';

declare global {
  interface Window {
    isMac: boolean;
    locStrings: Supportedi18nStrings;
    locStringsDefault: Supportedi18nStrings;
    sendBadgeCount: (count: number) => void;
    sendDeleteAccount: (accountId: string, sessionId?: string) => void;
    sendLogoutAccount: (accountId: string) => void;
    wire: _wire;
  }

  namespace NodeJS {
    interface Global {
      desktopCapturer: DesktopCapturer;
      environment: typeof environment;
      notification_icon: string;
      openGraph: any;
      winston: any;
    }
  }

  const amplify: _amplify;
  const z: _z;
}
