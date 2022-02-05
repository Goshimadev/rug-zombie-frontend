import { BIG_ZERO } from '../../utils/bigNumber'
import artists from './artists'
import { Nft, NftUserInfo } from '../../state/types'

const DEFAULT_USER_INFO: NftUserInfo = {
  ownedIds: [],
}

const nfts: Nft[] = [
  {
    id: 0,
    name: 'yApe Common',
    symbol: 'yAPE-COMMON',
    description: 'Good things never last Mr. Denham.',
    address: {
      56: '0xa8a30a507c44Cb7Bdcb7d6f1F8e6A7F373A9C9AA',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',
    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/yApeCommon.jpeg',
    type: 'image',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 1,
    name: 'yPanda Common',
    symbol: 'yPANDA-COMMON',
    description: 'Legend tells of a legendary warrior whose kung fu skills were the stuff of legend.',
    address: {
      56: '0x864661Cd1FDedf6Bc249beB8B76CeaD629B48122',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/yPandaCommon.jpeg',
    type: 'image',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 2,
    name: 'DragonFarm Finance Common',
    symbol: 'DRAGON-COMMON',
    description: 'My armor is like tenfold shields, my teeth are swords, my claws spears, the shock of my tail a thunderbolt, my wings a hurricane, and my breath death!',
    address: {
      56: '0x983608174E9ae08D938433119aD5C4b1f8B29A03',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/CommonDragonFarmFinance.webm',
    type: 'video',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 3,
    name: 'Fairmoon Common',
    symbol: 'FAIRMOON-COMMON',
    description: 'It\'s fairly common.',
    address: {
      56: '0x47367847B67b5D4fe905d18D2Cc4e0D149008C41',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/FairmoonCommon.webm',
    type: 'video',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 4,
    name: 'Zombie on the Moon',
    symbol: 'Z-MOON',
    description: 'There is no fair side of the moon really.',
    address: {
      56: '0x0b0dEa27fD22009A8ee2d0222025Eb9a81a9B26E',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/FairmoonUncommon.webm',
    type: 'video',
    rarity: 'Uncommon',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 5,
    name: 'Patient Zero Alpha',
    symbol: 'PATIENT-ZERO',
    description: 'Not much is known about the origin of the first humans gone zombie. We do know this one loved tacos.',
    address: {
      56: '0xFEf72C8d941F4F2D308E2Ae892AEDc084b280bB0',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',
    },
    totalSupply: BIG_ZERO,
    path: '/images/rugZombie/Patient Zero.jpg',
    type: 'image',
    rarity: 'Biblical',
    userInfo: { ...DEFAULT_USER_INFO }
  },
  {
    id: 6,
    name: 'Basic Zombie',
    symbol: 'BASIC-ZMBE',
    description: 'This grave\'s multiplier is suspiciously low, what could frankenstein be planning.',
    address: {
      56: '0x6209E17d98ba2089571476940751802AAc4249e8',
      97: '0xe06DdB8c0cC6c0CB35e252f9c333dCa7b0362Dc4',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/BasicZombie.gif',
    type: 'image',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 7,
    name: 'Viking Brains',
    symbol: 'BRAINS',
    description: 'Fear not death, for the hour of your doom is set and none may escape it.',
    address: {
      56: '0x4659c3ad5d487c8de34744120559d48dcf288a22',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',
    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/VikingBrains.jpeg',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 8,
    name: 'ZombieSlayer',
    symbol: 'ZSC',
    description: 'We wrestle not with flesh and blood, but with principalities.',
    address: {
      56: '0xbd7f3130cB219e47584591051b5806556006B0A9',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',
    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/ZombieSlayer.gif',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 9,
    name: 'Zombie100',
    symbol: 'Z100',
    description: 'My name is legion, for we are many.',
    address: {
      56: '0xeC1CC772F2ad80D8341351a532303d986B41D5e4',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Zombie100.gif',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 10,
    name: 'Raremoon',
    symbol: 'RAREMOON',
    description: 'Fair moon risin\' in a sky of black dust.',
    address: {
      56: '0x6195E792F558A2BEA35f54bA8FF9897445867951',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Raremoon.jpeg',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 11,
    name: 'My name is MERL',
    symbol: 'MERL-RARE',
    description: 'The man who believes that the secrets of the world are forever hidden lives in mystery and fear.',
    address: {
      56: '0x52ECFee39530A35696F6633Cba0e957657a66357',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/My Name Is MERL.png',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 12,
    name: 'Chompers',
    symbol: 'CHOMP',
    description: 'Live every week like it\'s shark week.',
    address: {
      56: '0x37E178be665fE4bFD9dAd0F537B9f3E60a05Ff9A',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Chompers.webm',
    type: 'video',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 13,
    name: 'DeadDollar',
    symbol: '$DEAD',
    description: 'https://en.wikipedia.org/wiki/Hyperinflation',
    address: {
      56: '0x09853d458bfcD6690eB626302ca2A79ae98933F8',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/DeadDollar.png',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 14,
    name: 'The Rad Chad',
    symbol: 'RAD-C',
    description: 'The radiation gave him lzr eyes.',
    address: {
      56: '0xd39c4280b080d33352d79c08d763570d7d7e62bb',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/The Rad Chad.png',
    type: 'image',
    rarity: 'Uncommon',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 15,
    name: 'Zombiden',
    symbol: 'Z-BIDEN',
    description: 'C\'mon man.',
    address: {
      56: '0x1050DC60784117fcc4F995Ca6980a3beE2765564',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/RUGBIDEN.webm',
    type: 'video',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 16,
    name: 'Zomburger',
    symbol: 'Z-BURGER',
    description: 'Would you like fries with that?',
    address: {
      56: '0xD0AA831AcC0EE1d3b7aAA209Ab44eA680074C2Ed',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Zomburger.jpeg',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 17,
    name: 'Silverback',
    symbol: 'SILVERBACK',
    description: 'One Family, One Troop.',
    address: {
      56: '0xa8740132360f5c1C487259066ddb5C5c4292def2',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Silverback.webm',
    type: 'video',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 18,
    name: 'Patient Zero Beta',
    symbol: 'PATIENT-ZERO',
    description: 'He loves cake.',
    address: {
      56: '0xc4Ba6d56C162efBFA881DAd69AAcC9263A352C8A',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/PatientZeroBeta.png',
    type: 'image',
    rarity: 'Biblical',
    userInfo: { ...DEFAULT_USER_INFO }
  },
  {
    id: 66,
    name: 'Patient Zero Gamma',
    symbol: 'PATIENT-ZERO',
    description: 'The blockspring.',
    address: {
      56: '0x76a74D015c5497F8Ee2b583518266082E3af1cfF',
      97: '0x9Ba44B302148B1e6B8d5851409aA93666DdFa97A',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmRhksLK5YJjhSD1GssYL6czH1xdumKxUa4eQaN6AwDcyR',
    type: 'image',
    rarity: 'Biblical',
    userInfo: { ...DEFAULT_USER_INFO },
    artist: artists.jussjoshinduh
  },
  {
    id: 19,
    name: 'Zombie Horde',
    symbol: 'HORDE',
    description: 'In your head X2.',
    address: {
      56: '0xABef28a6686A75c24c79fD95d31E7bD9828Ab1B8',
      97: '0x996540168b5981A5a249e44BA4347fd099a6d1e7',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Zombie Multiplier.png',
    type: 'image',
    rarity: 'Uncommon',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 20,
    name: 'Block Party',
    symbol: 'PARTY',
    description: 'Some of us are like a shovel brigade that follow a parade down Main Street cleaning up.',
    address: {
      56: '0xce428a085298e89034195c776cc8a5904093a532',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/Main%20Street.png',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 21,
    name: 'Electric Zombie',
    symbol: 'ELECTRIC',
    description: 'There was no help, no help from you. Sound of the drums, beating in my heart, the thunder of guns tore me apart.',
    address: {
      56: '0x61ea827873Ee1fAcD5c6Cc4D86c5477192AD7E34',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Electric Zombie.png',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 22,
    name: 'Young Fool',
    symbol: 'FOOL',
    description: 'How dangerous emperors are when they go mad.',
    address: {
      56: '0x84890D06cD06778CfE7206A8c72b51551Fe26DF3',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/Young%20Fool.jpeg',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 23,
    name: 'Rugian Shield',
    symbol: 'SHIELD',
    description: '"The twilight there holds a serene beauty... you have seen it yourself as sun sets on this world. Bathed in the light, all the people were pure and gentle."',
    address: {
      56: '0xeD84e84F95170bcdDCE92aD44e1E93ACe511Bb1d',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/Rugian%20Shield.png',
    type: 'image',
    rarity: 'Uncommon',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 24,
    name: 'GlitchLink',
    symbol: 'gLINK',
    description: '"I am error.',
    address: {
      56: '0xd10A49fb53cFCc3b9C2c27aB314BCC8dB2A144A3',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/GlitchLink.webm',
    type: 'video',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 25,
    name: 'Leonhard Euler\'s Day Off',
    symbol: 'EULER',
    description: 'Now I will have less distraction.',
    address: {
      56: '0x58D739aF3aBBb8d34A2D9068dCC60a95D172f80c',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Leonhard Euler\'s Day Off.gif',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 26,
    name: 'The Inevitable Ape',
    symbol: 'INEVITABLE',
    description: 'Welcome to the Jungle.',
    address: {
      56: '0x1443f5Cb7F3128a9c09289dD48B41d200e0BE590',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/ApeSwap-min.png',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 27,
    name: 'Nightmare Fuel Karen',
    symbol: 'KAREN',
    description: 'May I speak to your manager?',
    address: {
      56: '0xe10F32986c97F9c74bD604E081Db114Ca17D3B5a',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmaTXD2A7dfTaMhGzDU9ubFwVS79GF9EPMRFkGc6G9XEHf',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 28,
    name: 'Slow Zombie',
    symbol: 'SLOW',
    description: 'Too late bruh',
    address: {
      56: '0xe72CfFDEFfd85f2a2b83B58fDBF3cCAba578599a',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmXcs1Bpp3d16pF6HEKGmo4WTj8WU7YyaGi9b6F71StvDF',
    type: 'image',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 29,
    name: 'Zombie Multiplexer',
    symbol: 'MULTIPLEXER',
    description: 'If three or more values occur at the maximum frequency, the dataset is multi-modal.',
    address: {
      56: '0x72762C0D0812F157b59CecF0eeC6b1B15d175b97',
      97: '0x71332418219A3529e317806F4E9Ee0B5efe5C30d',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/Qmdi7wTt8iF62ay8foD7nqP5F7qSB9YGaYgY3NL1URA5Cw',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 30,
    name: 'Zombie Wallet',
    symbol: 'ZWALLET',
    description: 'Genuine Human Leather!',
    address: {
      56: '0xcf9ce4bb89a7848015b1b281427694d417a0ce2a',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmcvagniUfh9k8Ks42pJPnDicHBGSkFgLB6dcUbJKnTB4p',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 31,
    name: 'Meowser',
    symbol: 'MEOWSER',
    description: 'Here kitty kitty',
    address: {
      56: '0xB48b4aAC280C2a89b58272f942c46C66C1b42e20',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmeRBJF6shwm23FrvCQ3SU69wWFcN3kJXNqseTxCyvi3LN',
    type: 'image',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 32,
    name: 'The Killmonger',
    symbol: 'KILLMONGER',
    description: 'Bury me in the ocean, with my ancestors that jumped from the ships, because they knew death was better than bondage',
    address: {
      56: '0x33566cd376B81975f23c74Fe0105cf198342Ac74',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/The Killmonger min.jpeg',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 33,
    name: 'Crypto Mutant Zombie',
    symbol: 'MUTANT',
    description: 'This ape is never bored.',
    address: {
      56: '0xe6BCC4522FbBC2B6B064b3614D3a8d578aB077A4',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/Zombi_Monkey-min.jpg',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 34,
    name: 'Zombabe',
    symbol: 'BABE',
    description: 'Her brains bring all the zomboys to the yard.',
    address: {
      56: '0xa6D1442807316e163e7fc739281e3e1b93CF0960',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmVGjzRvf2WD5JKjh5wNVjVtimPv9R2mzeuYUNin2cFsc7',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 35,
    name: 'Freaky Zolom',
    symbol: 'ZOLOM',
    description: 'Hail Hydra.',
    address: {
      56: '0x835a932909c97bb68160be4547bc196abb73475a',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmafkchvcXFDdMkdJzQFjWaXcZQyGfe4F8p35X4TQVVGH3',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 36,
    name: 'The Eye of Bingus',
    symbol: 'EYE-OF-BINGUS',
    description: 'Oh my gosh, that guy has a mullet!',
    address: {
      56: '0xA626c9CE2FcCAeD9C604Ebd38C4545c153D051E5',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmYvobX57rSxJE9LC2tgQhWKKirZQRmnfTHFy12tR8SQba',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 37,
    name: 'ChompersV2',
    symbol: 'CHOMP-V2',
    description: 'Sharks. I never saw that coming.',
    address: {
      56: '0x0Fa3AbBD69226164b9960ed0AfE4B7224ACc0eCc',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmSwn2nVZ7onSrh59LTtiC4o44Qbzzdk5eQFJkPB6wxbWw',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 38,
    name: 'Zombie Trader Common',
    symbol: 'TRADER-COMMON',
    description: 'Price is what you pay. Value is what you get. Risk comes from not knowing what you\'re doing.',
    address: {
      56: '0x9E926ba265AaE57Cf50193f6984E7e44A2763E4a',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmPiLdr6ZRieLFLYNRA2ch1PUr9aDqw7QAm832VZ9Texyj',
    type: 'image',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 39,
    name: 'Season 1',
    symbol: 'WHALE',
    description: 'I try all things, I achieve what I can.',
    address: {
      56: '0xADEbC6fe47Baf315bfbD66F8Ce515fBc78Bf42EB',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmQnj8i4k2kwoboNN2TMoJ5ugH1Mxav4r8zAsz6PmXvP7P',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 40,
    name: 'Trust Us',
    symbol: 'TRUST',
    description: 'Or don\'t, we will just zombie on.',
    address: {
      56: '0xaCA0503F854fF89a7FFA75CE139fdaEa3DccD21B',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/Trust%20Us.jpeg',
    type: 'image',
    rarity: 'Biblical',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 41,
    name: 'The Chosen',
    symbol: 'CHOSEN',
    description: 'Did you hear the bells ringing?',
    address: {
      56: '0x9609Ee9f17987587083279e60ca5e86c30FF28A2',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/Qmet1ztQoPXekbc8AK3VkxJK62CAQJC35weUKM6iz4Mn8s',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 42,
    name: 'Fluffy',
    symbol: 'FLUFFY',
    description: 'C\'est simple comme bonjour',
    address: {
      56: '0x988EE236F4c3E0244e7785F2a41FE8533AE1A7f3',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmdRJp1tPFNdg9WP1V1A3KTGYaF74zs6vT5yodhsn9FGcn',
    type: 'video',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 43,
    name: 'Catacombs',
    symbol: 'CATACOMBS',
    description: 'They lurk down there.',
    address: {
      56: '0xbAcDdD813c4C786eFB43d899C9b5d9E7F43e5A20',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295'
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmbCfEW45ZFBXs1NgRHYyMXd2u9bUAeL8poHybZ1kP5oLY',
    type: 'image',
    rarity: 'Mythic',
    userInfo: { ...DEFAULT_USER_INFO }
  },
  {
    id: 44,
    name: 'Zomberina',
    symbol: 'ZOMBERINA',
    description: 'Arabesque!',
    address: {
      56: '0x4CD0F32bf663EF1d8C016E393243dA753Db19CF3',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmTKuQUr7t4rTmFCSm2kFD8azSK24ysUDWDKBDtHXnkhmT',
    type: 'image',
    rarity: 'Common',
    artist: artists.jussjoshinduh,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 45,
    name: 'Zomboni',
    symbol: 'ZOMBONI',
    description: 'Ice, Ice, Zombie',
    address: {
      56: '0xb256Bf0E888c34FE67a4169f0A5f80AC9F9e2f6D',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmcDG9auXhMRJdF9eaSMhrmcWeJe6kHrDAbYvDrVTYPaub',
    type: 'image',
    rarity: 'Uncommon',
    artist: artists.jussjoshinduh,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 46,
    name: 'I am Drol',
    symbol: 'DROL',
    description: 'There can only be one.',
    address: {
      56: '0x431b4049B278edaE5856DE6BDA7898b8267c8253',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmW5KmNsBPHWfc8UBEMWvtQvVwM33UsBuiqqynjKftWSnX',
    type: 'image',
    rarity: 'Rare',
    artist: artists.jussjoshinduh,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 47,
    name: 'Ocean',
    symbol: 'OCEAN',
    description: 'It\'s the shark\'s house.',
    address: {
      56: '0x8c1F3947881662C7F1753A3432891227ffab92B1',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',
    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/Ocean-Compresed.webm',
    type: 'video',
    rarity: 'Legendary',
    artist: artists.ZomBaes,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 48,
    name: 'Shiny Inevitable Ape',
    symbol: 'INEVITABLE',
    description: 'Welcome to the Jungle.',
    address: {
      56: '0xE501dB597207F41599b05e8fD45e229686683D5a',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmTUNZZSZZSbVtfvDkHFXPr9fuHdXYLnQeTJMTiRMJ7epq',
    type: 'video',
    rarity: 'Legendary',
    artist: artists.jussjoshinduh,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 49,
    name: 'Sugar Skull Common',
    symbol: 'SSKULL',
    description: 'lo basico',
    address: {
      56: '0xe06DdB8c0cC6c0CB35e252f9c333dCa7b0362Dc4',
      97: '0x4811502B1d2E3695852d331E8e7Ec8acFd18cff3',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmNvGS6bxSueoyMHsxHtt7biEWCLZJ3o9TLHDR9hxHS7m1',
    type: 'image',
    rarity: 'Special',
    artist: artists.canadiancryptojunkie,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 50,
    name: 'The Sugar Bunch',
    symbol: 'SBUNCH',
    description: 'Tlos tigres chinos',
    address: {
      56: '0x344D01D5EADb5eb261c779B4Aa8B821b6Fa15D0B',
      97: '0x7742D9F34010F5d1015885c5d10ED615DFa2eb53',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmRwEtpb8yxcWBTBCp7UFFH72R2c72fJP4swfjyTyJv7C4',
    type: 'image',
    rarity: 'Special',
    artist: artists.canadiancryptojunkie,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 51,
    name: 'The Sugar Plex',
    symbol: 'SPLEX',
    description: 'la reina',
    address: {
      56: '0x29c2aE1acFE7dbADeed503AF38F9A59E7a72A86d',
      97: '0x701855c54F7084D494DA18157bD164d3AB32a0a0',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmRWcYPzZZt7Z1gk6VPZ9zJS7nAY8xxD6JX3ScdyrqyfR2',
    type: 'image',
    rarity: 'Special',
    artist: artists.canadiancryptojunkie,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 52,
    name: 'Enigma',
    symbol: 'ENIGMA',
    description: 'With this artefact, I am certain of nothing.',
    address: {
      56: '0xBE15d0213Acb06151EC62044972DEb035717eD3B',
      97: '0x701855c54F7084D494DA18157bD164d3AB32a0a0',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmcGGXw3FiX61ALeZdSNyx2MKiquVZhF489jMJJto7rMLu',
    type: 'image',
    rarity: 'Special',
    artist: artists.canadiancryptojunkie,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 53,
    name: 'Sergeant Ser Silverback',
    symbol: 'SERGEANT',
    description: 'Tonight, we\'ll see the good and evil inside everyone.',
    address: {
      56: '0xE1D5868ce6B10b0E213A66a360F59c0298218603',
      97: '0x701855c54F7084D494DA18157bD164d3AB32a0a0',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmXXu2ThiBQf3GiUQMwSLoVk5e4ifhmZJSYzAAbUndj7fw',
    type: 'image',
    rarity: 'Special',
    artist: artists.none,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 54,
    name: 'Zomball',
    symbol: 'ZOMBALL',
    description: 'I choose you.',
    address: {
      56: '0x996Ddf84EC789aD9fcE7a4b85160869Bb3E470c2',
      97: '0x701855c54F7084D494DA18157bD164d3AB32a0a0',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmYsk7hJcPAdvSEyQZd9aC3iWq1KCN6UHVsEGvbNifY5rn',
    type: 'image',
    rarity: 'Common',
    artist: artists.trippynazz,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 55,
    name: 'Randall-Farm',
    symbol: 'RANDALL',
    description: 'snitches get stitches',
    address: {
      56: '0x384D07E684748BfCe433220FE69d97d9392be3d9',
      97: '0x701855c54F7084D494DA18157bD164d3AB32a0a0',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmVg8ZnNjqP2iXZLWuGACJ1aT9ehHkw8PuaJ4n8XtLccwn',
    type: 'image',
    rarity: 'Common',
    artist: artists.trippynazz,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 56,
    name: 'Jonathan',
    symbol: 'JONATHAN',
    description: 'he still likes turtles',
    address: {
      56: '0xe7CD29f1e6f8B205a45dcd97DCf9188a5f666c40',
      97: '0x701855c54F7084D494DA18157bD164d3AB32a0a0',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmQ7C6m85qWCjBnMyMHeuhf8xgYwcKjzr2iihvgwi9Yk6T',
    type: 'image',
    rarity: 'Common',
    artist: artists.trippynazz,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 57,
    name: 'Feeling Lucky',
    symbol: 'LUCKY',
    description: 'They are the new breed of slot machine-colorful, fancy, exciting, wonderful...and deadly.',
    address: {
      56: '0x666Fe635Df740c5D474587Ee7eD7B376811Ee97B',
      97: '0x701855c54F7084D494DA18157bD164d3AB32a0a0',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmNqPjeXyruC29UdbQWF3dcWdZFZyv4E5BoTKs9aqmTCEo',
    type: 'image',
    rarity: 'Common',
    artist: artists.trippynazz,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 58,
    name: 'Zash',
    symbol: 'ZASH',
    description: 'It\'s his destiny.',
    address: {
      56: '0xeA6803331247b6116F142a6AfBbc13878561EE9E',
      97: '0x701855c54F7084D494DA18157bD164d3AB32a0a0',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/Qmazy6NjT8tExujfoqHDuA5RmWZ6xdrbNiFQKkVMiWLXVu',
    type: 'image',
    rarity: 'Uncommon',
    artist: artists.trippynazz,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 59,
    name: 'Me and the Boys',
    symbol: 'THEBOYS',
    description: 'Don\'t worry the kids are saved.',
    address: {
      56: '0x70E72B22B348b871FA56fC6a27B0bEadfFCC723b',
      97: '0x701855c54F7084D494DA18157bD164d3AB32a0a0',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmXsUgHfVLhTyiSk4VPbcr6iacEEDwo8KXfsK8tN4QXW55',
    type: 'image',
    rarity: 'Uncommon',
    artist: artists.trippynazz,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 60,
    name: 'Bog of War',
    symbol: 'WAR',
    description: 'There are occasions when commands of the sovereign need not be obeyed.',
    address: {
      56: '0x515D20b37B6Ae6a5b919eFAef86D53810b70a09f',
      97: '0x701855c54F7084D494DA18157bD164d3AB32a0a0',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmZiTTWyAyru6Me4WvmvmcJSM1C6exeqiGcUTWkBUnwYUp',
    type: 'image',
    rarity: 'Rare',
    artist: artists.trippynazz,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 61,
    name: 'The Double Black Diamond',
    symbol: 'DBD',
    description: 'When you\'re on a merry-go-round, you miss a lot of the scenery',
    address: {
      56: '0x3a56ffFE595CA8e9d8eC46D74721F60B3aF9FE74',
      97: '0x701855c54F7084D494DA18157bD164d3AB32a0a0',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmQ12QcVoJtuzGmf8zaqGyHnXWidnCSs6tqFRHASpbYnuf',
    type: 'image',
    rarity: 'Rare',
    artist: artists.canadiancryptojunkie,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 62,
    name: 'The Ripster',
    symbol: 'RIPSTER',
    description: 'Truly Jawsome.',
    address: {
      56: '0x16f9f01AB90dC83FA41bAB2d10E63ef723Fa6A58',
      97: '0x9Ba44B302148B1e6B8d5851409aA93666DdFa97A',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmaJhr4tHsreMqQ81D5ni8iAApmpTm5EDtq8MEHFZDEqnt',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
    artist: artists.jussjoshinduh
  },
  {
    id: 63,
    name: 'Chompnado Rampage',
    symbol: 'CHOMPNADO',
    description: 'Sharks. I never saw that coming.',
    address: {
      56: '0xAF1A40c4f497FEd95d799cD58A3b0dE8066c975E',
      97: '0x9Ba44B302148B1e6B8d5851409aA93666DdFa97A',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmdhptrGSeqm3ipgLEsFtRZ5oW7RZmoA1vMZHqfAtuGhfP',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
    artist: artists.canadiancryptojunkie
  },
  {
    id: 64,
    name: 'Don\'t mess with Cthulhu',
    symbol: 'CTHULHU',
    description: 'Waiting, dreaming.',
    address: {
      56: '0x3c73dcAFa0958700e92E15096db31DD2FDD16BFc',
      97: '0x9Ba44B302148B1e6B8d5851409aA93666DdFa97A',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmQ11oNLDfg7c3k1S6sfBEhcHWHtc9ykTQJhXhNU25fp7V',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
    artist: artists.canadiancryptojunkie
  },
  {
    id: 65,
    name: 'Infinite Zombie',
    symbol: 'IFZ',
    description: 'Don\'t worry, I\'m the strongest.',
    address: {
      56: '0xD9a1E771bf857f49db78E96B01Dd4E0BD4A68f29',
      97: '0x9Ba44B302148B1e6B8d5851409aA93666DdFa97A',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/Qme5fwhsG5sAHWg1yZUPYHqVj3wvZWetzpu5FWV4cmYHV3',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
    artist: artists.canadiancryptojunkie
  },
  {
    id: 67,
    name: 'Marbles',
    symbol: 'MARBLES',
    description: 'Trust people? Never again.',
    address: {
      56: '0xf007c2896e969b32733b00cce93210e3886d5c94',
      97: '0x9Ba44B302148B1e6B8d5851409aA93666DdFa97A',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmXNJtKYSRKNeoGDRgzfSjom69SJkGUVVz7gYUmnb5frHS',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
    artist: artists.trippynazz
  },
  {
    id: 68,
    name: 'Great Zom',
    symbol: 'ZOM',
    description: 'He lurks above.',
    address: {
      56: '0x084766d130f0c4007febb1283bbe977653c2e290',
      97: '0x9Ba44B302148B1e6B8d5851409aA93666DdFa97A',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmXKBTHHpaSrhgtC67RT4JqkjDHaTJAsnYWfszcUUZfehM',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
    artist: artists.ayaz_psd
  },
  {
    id: 69,
    name: 'The DataLab',
    symbol: 'DATALAB',
    description: 'Behind illusions, we uncover truth.',
    address: {
      56: '0x6812B0733dB5612fae57a1D945cFEbf73F880b15',
      97: '0x9Ba44B302148B1e6B8d5851409aA93666DdFa97A',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmYjYvkES4PbSuBhUg5bwnrb4vAHJDDm3u3UMQ9H47Nfq2',
    type: 'image',
    rarity: 'Mythic',
    userInfo: { ...DEFAULT_USER_INFO },
    artist: artists.ayaz_psd
  },
  {
    id: 70,
    name: 'The Infamous Matos',
    symbol: 'INFAMOUS',
    description: 'bitconnEEEEEEEEEEECT!',
    address: {
      56: '0x9690D5a817906172c8b1e2C3e7F9D641cbF095Fd',
      97: '0x9Ba44B302148B1e6B8d5851409aA93666DdFa97A',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmZabZnzYQBVRoehCNtEUBSRUGferfRcuAjX8iz37c4VtL',
    type: 'image',
    rarity: 'Special',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 71,
    name: 'The Technical One',
    symbol: 'TECHNICAL',
    description: 'technically, you lost your money.',
    address: {
      56: '0xA51388a9B2e26641F699198B4Ff5eFcfE33a5a9B',
      97: '0x9Ba44B302148B1e6B8d5851409aA93666DdFa97A',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmZW6MpQEfQqPXfHxJmfXYqxCoWHrM5PG27NbJWXnKgpnC',
    type: 'image',
    rarity: 'Special',
    userInfo: { ...DEFAULT_USER_INFO },
  },  
  {
    id: 72,
    name: 'Collectorate #1',
    symbol: 'COLLECTORATE #1',
    description: 'Don\'t call him cubes.',
    address: {
      56: '0xe8399d697989d147efed8e5eead42716ee1b95b8',
      97: '0x9Ba44B302148B1e6B8d5851409aA93666DdFa97A',
    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/Collectorate%20%231%20-%20compressed.jpeg',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 73,
    name: 'Street Zombies',
    symbol: 'STREETZ',
    description: 'Life\'s a one way street, and you\'re not coming back.',
    address: {
      56: '0x51424Aaa5043e127abdF2F6cA8Aad25BDea48F1C',
      97: '0x9Ba44B302148B1e6B8d5851409aA93666DdFa97A',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmdSGtvB9tScPDuNNEh8xWAChdKZfv5MhV4cUkWSgBxjNy',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 74,
    name: 'The Mother',
    symbol: 'MOTHER',
    description: 'Endure the darkness, for it will show you the stars.',
    address: {
      56: '0x749859A107d5f464cb1fEB1d1a558C148bb8D707',
      97: '0x9Ba44B302148B1e6B8d5851409aA93666DdFa97A',
    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/The%20Mother%20compressed.jpeg',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
      {
    id: 75,
    name: 'TreTre',
    symbol: 'TRETRE',
    description: 'Technically Famous',
    address: {
      56: '0x2B23D9Cc48D9AAeEB51bA06A2aE10945E9AE5a48',
      97: '0x4f134fcFCe1476ebB8bA76Bd54524D1CfE59BDe6',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmZhgBBHipRXxMi8NqPxkSNEJWhTeF7XJ5FXxp3tYmcLAx',
    type: 'image',
    rarity: 'Rare',
    artist: artists.trippynazz,
    userInfo: { ...DEFAULT_USER_INFO },
  },
    {
    id: 76,
    name: 'Carllito',
    symbol: 'CARLLITO',
    description: 'Don\'t Look Him in the Eyes',
    address: {
      56: '0xc850E5e15B3cE6Ff55Ff5B47dE789B6826aEEA5F',
      97: '0x4f134fcFCe1476ebB8bA76Bd54524D1CfE59BDe6',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmYQ1HBkRmxjwSvm6f8fK97jNX8VqynYGecBfJu84qa9eg',
    type: 'image',
    rarity: 'Rare',
    artist: artists.ZomBaes,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 77,
    name: 'Mines of Mineria',
    symbol: 'MINERIA',
    description: 'You\'re gonna need a bigger hammer.',
    address: {
      56: '0xd95795DD72082A344455192CA7E2Dd4b8A28894d',
      97: '0x4f134fcFCe1476ebB8bA76Bd54524D1CfE59BDe6',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmYZZSJahiBKWUhwJMcgQT4xJYnqFjWWT1XQSUnPdhZseU',
    type: 'image',
    rarity: 'Rare',
    artist: artists.ZomBaes,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 78,
    name: 'Garth',
    symbol: 'GARTH',
    description: 'Call me a cake because I’ll go straight to your ass cowboy.',
    address: {
      56: '0x71Af678b83E69C1754FCf50A37BF9b8989e980E4',
      97: '0x4f134fcFCe1476ebB8bA76Bd54524D1CfE59BDe6',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/Qmbn35zChcRM5UWQFHwk4zF4bY9Ku4bq4YiW7qaamKkWsw',
    type: 'image',
    rarity: 'Common',
    artist: artists.canadiancryptojunkie,
    userInfo: { ...DEFAULT_USER_INFO },
  },
]


export default nfts
