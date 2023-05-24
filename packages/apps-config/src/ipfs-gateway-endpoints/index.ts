// Copyright 2019-2021 Crust Network authors & contributors
// License: Apache-2.0

import type { TFunction } from 'i18next';
import type { AuthIpfsEndpoint } from './types';

// Definitions here are with the following values -
//   info: the name of a logo as defined in ../ui/logos, specifically in namedLogos
//   text: the IPFS endpoint name
//   value: the IPFS endpoint domain
//   location: IPFS gateway location
//   status: IPFS gateway status: online, error, inactivated(incluede null and all other strings)
export function createAuthIpfsEndpoints (t: TFunction): AuthIpfsEndpoint[] {
  return [
    // for prod
    {
      location: t('Singapore'),
      text: t('DCF'),
      value: 'https://crustipfs.xyz',
      status: 'online'
    },
    {
      location: t('Seattle'),
      text: t('⚡ Thunder'),
      value: 'Private use, please contact hi@crust.network to get more details',
      status: 'inactivated'
    },
    {
      location: t('Berlin'),
      text: t('Crust Network'),
      value: 'https://ipfs-gw.decloud.foundation',
      status: 'online'
    },
    {
      location: t('Shanghai'),
      text: t('️⚡ Thunder'),
      value: 'https://gw.crustfiles.net',
      status: 'online'
    },
    {
      location: t('Henan'),
      text: t('️Crust IPFS GW'),
      value: 'https://gw.w3ipfs.cn:10443',
      status: 'online'
    },
    {
      location: t('Los Angeles'),
      text: t('️Crust IPFS GW'),
      value: 'https://gw.smallwolf.me',
      status: 'online'
    },
    {
      location: t('Helsinki'),
      text: t('️crust-fans'),
      value: 'https://crust.fans'
      //crustAddress: cTJUpCMAEzcLzaQej1A456S9v1qYpjFd8JgK9GLoeh4CKtaj7
    },
    {
      location: t('Phoenix'),
      text: t('️crustgateway'),
      value: 'https://crustgateway.com'
      //crustAddress: cTJUpCMAEzcLzaQej1A456S9v1qYpjFd8JgK9GLoeh4CKtaj7
    },
    {
      location: t('Germany'),
      text: t('️crustgateway-de'),
      value: 'https://crustgateway.online'
      //crustAddress: cTJUpCMAEzcLzaQej1A456S9v1qYpjFd8JgK9GLoeh4CKtaj7
    }
    // {
    //   location: t('Beijing'),
    //   text: t('️Deklod'),
    //   value: 'https://ipfs-gw.dkskcloud.com'
    // }
  ];
}
