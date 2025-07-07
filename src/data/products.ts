import { Product } from '../types';

// Локал зургуудыг импортлох
import AmethystCamoTee1 from '../Image/AmethystCamoTee1 .png';
import AmethystCamoTee2 from '../Image/AmethystCamoTee 2.png';
import AmethystCamoTee3 from '../Image/AmethystCamoTee 3.png';
import AmethystCamoTee4 from '../Image/AmethystCamoTee 4.png';
import AmethystPumpCover1 from '../Image/AmethystPumpCover1.png';
import AmethystPumpCover2 from '../Image/AmethystPumpCover2.png';
import AmethystPumpCover3 from '../Image/AmethystPumpCover3.png';
import AmethystPumpCover4 from '../Image/AmethystPumpCover4.png';
import ArcticCamoPump1 from '../Image/ArcticCamoPump1.png';
import ArcticCamoPump2 from '../Image/ArcticCamoPump2.png';
import ArcticCamoPump3 from '../Image/ArcticCamoPump3 .png';
import ArcticCamoPump4 from '../Image/ArcticCamoPump 4.png';
import HeavyweightShadowPumpCover1 from '../Image/HeavyweightShadowPumpCover1.png';
import HeavyweightShadowPumpCover2 from '../Image/HeavyweightShadowPumpCover2.png';
import HeavyweightShadowPumpCover3 from '../Image/HeavyweightShadowPumpCover3.png';
import HeavyweightShadowPumpCover4 from '../Image/HeavyweightShadowPumpCover4.png';
import AmethystHeavyweightSweatpants1 from '../Image/AmethystHeavyweightSweatpants1.png';
import AmethystHeavyweightSweatpants2 from '../Image/AmethystHeavyweightSweatpants2.png';
import AmethystHeavyweightSweatpants3 from '../Image/AmethystHeavyweightSweatpants3.png';
import AmethystHeavyweightSweatpants4 from '../Image/AmethystHeavyweightSweatpants4.png';
import ArcticCamoHeavyweightSweatpants1 from '../Image/ArcticCamo HeavyweightSweatpants1.png';
import ArcticCamoHeavyweightSweatpants2 from '../Image/ArcticCamo HeavyweightSweatpants2.png';
import ArcticCamoHeavyweightSweatpants3 from '../Image/ArcticCamo HeavyweightSweatpants3.png';
import ArcticCamoHeavyweightSweatpants4 from '../Image/ArcticCamo HeavyweightSweatpants4.png';
import SunwashedSweatpants1 from '../Image/SunwashedSweatpants1.png';
import SunwashedSweatpants2 from '../Image/SunwashedSweatpants2.png';
import SunwashedSweatpants3 from '../Image/SunwashedSweatpants3.png';
import SunwashedSweatpants4 from '../Image/SunwashedSweatpants4.png';
import SeamShortsOnyxBlack from '../Image/SeamShortsOnyxBlack.png';
import SeamShortsMochaBrown from '../Image/SeamShortsMochaBrown.png';
import SeamShortsForestGreen from '../Image/SeamShortsForestGreen.png';
import SeamShortsCherryRed from '../Image/SeamShortsCherryRed.png';
import SeamShortsNavyBlue from '../Image/SeamShortsNavyBlue.png';
import SeamShortsAll from '../Image/SeamShortsAll.png';
import TacticalScorpionCargoBlack from '../Image/TacticalScorpionCargoBlack.png';
import TacticalScorpionCargoWhite from '../Image/TacticalScorpionCargoWhite.png';
import ScorpionAcidWashStringerWhite from '../Image/ScorpionAcidWashStringerWhite.png';
import ScorpionAcidWashStringerWhite2 from '../Image/ScorpionAcidWashStringerWhite2.png';
import ScorpionAcidWashStringerBlack from '../Image/ScorpionAcidWashStringerBlack.png';

export const products: Product[] = [
  // 1
  {
    id: '7',
    name: 'Amethyst Camo Tee',
    price: 32.99,
    category: 'T-Shirt',
    images: [AmethystCamoTee1, AmethystCamoTee2, AmethystCamoTee3, AmethystCamoTee4],
    description: 'The Amethyst Camo Tee is crafted from lightweight cotton and draped in the signature dark camo pattern, crackling with subdued purple lightning. The chest bears our logo, while the back slams bold ‘CONTROLLED INSANITY’ lettering—a declaration to the movement.',
    inStock: true,
    sizes: ['Small', 'Medium', 'Large', 'X-Large', '2X-Large', '3X-Large', '4X-Large'],
    sizingGuide: [
      { size: 'Small', length: 79, width: 71, sleeve: 26 },
      { size: 'Medium', length: 81, width: 73, sleeve: 28 },
      { size: 'Large', length: 83, width: 74, sleeve: 30 },
      { size: 'X-Large', length: 85, width: 76, sleeve: 32 },
      { size: '2X-Large', length: 87, width: 78, sleeve: 34 },
      { size: '3X-Large', length: 90, width: 81, sleeve: 36 },
      { size: '4X-Large', length: 93.5, width: 84, sleeve: 38 }
    ]
  },
  // 2
  {
    id: '8',
    name: 'Amethyst Pump Cover',
    price: 29.99,
    category: 'T-Shirt',
    images: [AmethystPumpCover1, AmethystPumpCover2, AmethystPumpCover3, AmethystPumpCover4],
    description: 'The Signature Pump Cover is a statement in heavyweight defiance. Crafted from double-layered, ultra-thick cotton, this oversized beast drapes like armor, built to withstand the grind. Front and back scream CONTROLLED INSANITY in massive, Amethyst-purple lettering—bold enough to command respect, dark enough to evade the weak. For those who lift with intent and move with purpose.',
    inStock: true,
    sizes: ['Small', 'Medium', 'Large', 'X-Large', '2X-Large', '3X-Large', '4X-Large'],
    sizingGuide: [
      { size: 'Small', length: 79, width: 71, sleeve: 26 },
      { size: 'Medium', length: 81, width: 73, sleeve: 28 },
      { size: 'Large', length: 83, width: 74, sleeve: 30 },
      { size: 'X-Large', length: 85, width: 76, sleeve: 32 },
      { size: '2X-Large', length: 87, width: 78, sleeve: 34 },
      { size: '3X-Large', length: 90, width: 81, sleeve: 36 },
      { size: '4X-Large', length: 93.5, width: 84, sleeve: 38 }
    ]
  },
  // 3
  {
    id: '9',
    name: 'Arctic Camo Pump',
    price: 31.99,
    category: 'T-Shirt',
    images: [ArcticCamoPump1, ArcticCamoPump2, ArcticCamoPump3, ArcticCamoPump4],
    description: 'Engineered for the freeze. The Arctic Camo Pump Cover is built to dominate subzero sessions with military-grade warmth—crafted from double-layered waffle fabric for brutal insulation without bulk. Cloaked in glacial camo and reinforced with heavyweight durability, it’s armor for the arctic grind.',
    inStock: true,
    sizes: ['Small', 'Medium', 'Large', 'X-Large', '2X-Large', '3X-Large', '4X-Large'],
    sizingGuide: [
      { size: 'Small', length: 79, width: 71, sleeve: 26 },
      { size: 'Medium', length: 81, width: 73, sleeve: 28 },
      { size: 'Large', length: 83, width: 74, sleeve: 30 },
      { size: 'X-Large', length: 85, width: 76, sleeve: 32 },
      { size: '2X-Large', length: 87, width: 78, sleeve: 34 },
      { size: '3X-Large', length: 90, width: 81, sleeve: 36 },
      { size: '4X-Large', length: 93.5, width: 84, sleeve: 38 }
    ]
  },
  // 4
  {
    id: '10',
    name: 'Heavyweight Shadow Pump',
    price: 34.99,
    category: 'T-Shirt',
    images: [HeavyweightShadowPumpCover1, HeavyweightShadowPumpCover2, HeavyweightShadowPumpCover3, HeavyweightShadowPumpCover4],
    description: 'The Shadow Covers are heavyweight pump covers crafted to endure, embracing both the resilience and mystery of the night. Its double-layered, thermal design, promises not only warmth but a form-flattering silhouette that enhances without revealing',
    inStock: true,
    sizes: ['Small', 'Medium', 'Large', 'X-Large', '2X-Large', '3X-Large', '4X-Large'],
    sizingGuide: [
      { size: 'Small', length: 79, width: 71, sleeve: 26 },
      { size: 'Medium', length: 81, width: 73, sleeve: 28 },
      { size: 'Large', length: 83, width: 74, sleeve: 30 },
      { size: 'X-Large', length: 85, width: 76, sleeve: 32 },
      { size: '2X-Large', length: 87, width: 78, sleeve: 34 },
      { size: '3X-Large', length: 90, width: 81, sleeve: 36 },
      { size: '4X-Large', length: 93.5, width: 84, sleeve: 38 }
    ]
  },
  // 5
  {
    id: '11',
    name: 'Amethyst Heavyweight',
    price: 54.99,
    category: 'SweetPants',
    images: [AmethystHeavyweightSweatpants1, AmethystHeavyweightSweatpants2, AmethystHeavyweightSweatpants3, AmethystHeavyweightSweatpants4],
    description: 'The Amethyst Heavyweight Sweatpants are cut in an oversized silhouette and crafted from double-layered, ultra-thick cotton. Cloaked in the signature Controlled Insanity Dark Camo and charged with purple-electric highlights, they’re built to endure chaos without compromise. ',
    inStock: true,
    sizes: ['Small', 'Medium', 'Large', 'X-Large', '2X-Large', '3X-Large', '4X-Large'],
    sizingGuide: [
      { size: 'Small', length: 106, width: 75, sleeve: 0 },
      { size: 'Medium', length: 108, width: 78, sleeve: 0 },
      { size: 'Large', length: 109.5, width: 82, sleeve: 0 },
      { size: 'X-Large', length: 111, width: 86, sleeve: 0 },
      { size: '2X-Large', length: 112.5, width: 90, sleeve: 0 },
      { size: '3X-Large', length: 114, width: 94, sleeve: 0 },
      { size: '4X-Large', length: 115.5, width: 98, sleeve: 0 }
    ]
    // NOTE: Only length and width are mapped for SweetPants for now, as Product type only allows these fields. Add more fields to Product type if you want full pants guide.
  },
  // 6
  {
    id: '12',
    name: 'Arctic Camo Heavyweight',
    price: 56.99,
    category: 'SweetPants',
    images: [ArcticCamoHeavyweightSweatpants1, ArcticCamoHeavyweightSweatpants2, ArcticCamoHeavyweightSweatpants3, ArcticCamoHeavyweightSweatpants4],
    description: 'The Arctic Camo Heavyweight Sweatpants are engineered for the war against the elements. Wrapped in military-grade Arctic camo and built from brutal, heavyweight cotton, they lock in battlefield-level warmth without sacrificing mobility. ',
    inStock: true,
  },
  // 7
  {
    id: '13',
    name: 'Sunwashed Sweatpants',
    price: 52.99,
    category: 'SweetPants',
    images: [SunwashedSweatpants1, SunwashedSweatpants2, SunwashedSweatpants3, SunwashedSweatpants4],
    description: 'Built for comfort and resilience, the Sunwashed Forged in Failure Sweatpants are crafted from high-quality, thick, and durable cotton. Featuring distressed Controlled Insanity twilled stitching on the front leg and our signature logo in premium embroidery, these sweatpants combine style with substance. The sunwashed discoloration adds a touch of character, symbolizing weathering through the storm and emerging stronger.',
    inStock: true,
  },
  // 8
  {
    id: '14',
    name: 'Seam Shorts',
    price: 39.99,
    category: 'SweetPants',
    images: [
      SeamShortsNavyBlue, // Navy Blue first
      SeamShortsOnyxBlack,
      SeamShortsMochaBrown,
      SeamShortsForestGreen,
      SeamShortsCherryRed,
      SeamShortsAll,
    ],
    description: 'Elevate your workout gear with our Mesh Bodybuilding Shorts, engineered for both performance and style. The front of these shorts boldly displays the word "Controlled," while the back features "Insanity," reflecting your dedication and intensity. Made from breathable mesh material, they offer exceptional ventilation and comfort, keeping you cool and dry during even the most intense training sessions. These shorts are designed to support your every move while making a powerful statement about your commitment to bodybuilding.',
    inStock: true,
    sizes: ['Small', 'Medium', 'Large', 'X-Large', '2X-Large']
  },
  // 9
  {
    id: '15',
    name: 'Tactical Scorpion Cargo',
    price: 64.99,
    category: 'SweetPants',
    images: [TacticalScorpionCargoBlack, TacticalScorpionCargoWhite], // Black first
    description: 'The Tactical Scorpion Cargo Pants are engineered for versatility and durability. Featuring a modern, athletic fit with reinforced stitching, these cargos are built for both street style and rugged performance. Multiple pockets provide ample storage, while the elastic waistband ensures comfort for all-day wear. Available in classic Black and stylish Beige.',
    inStock: true,
    sizes: ['Small', 'Medium', 'Large', 'X-Large', '2X-Large', '3X-Large', '4X-Large'],
    sizingGuide: [
      { size: 'Small', sidePantsLength: 104, elasticWaist: 68, hips: 104, kneeWidth: 38, pantsLength: 99, frontRise: 29, backRise: 39 },
      { size: 'Medium', sidePantsLength: 106, elasticWaist: 72, hips: 108, kneeWidth: 39, pantsLength: 101, frontRise: 30, backRise: 40 },
      { size: 'Large', sidePantsLength: 108, elasticWaist: 76, hips: 112, kneeWidth: 40, pantsLength: 103, frontRise: 31, backRise: 41 },
      { size: 'X-Large', sidePantsLength: 110, elasticWaist: 80, hips: 116, kneeWidth: 41, pantsLength: 105, frontRise: 32, backRise: 42 },
      { size: '2X-Large', sidePantsLength: 112, elasticWaist: 84, hips: 120, kneeWidth: 42, pantsLength: 107, frontRise: 33, backRise: 43 },
      { size: '3X-Large', sidePantsLength: 114, elasticWaist: 88, hips: 124, kneeWidth: 43, pantsLength: 109, frontRise: 34, backRise: 44 },
      { size: '4X-Large', sidePantsLength: 116, elasticWaist: 92, hips: 128, kneeWidth: 44, pantsLength: 111, frontRise: 35, backRise: 45 }
    ]
  },
  // 10
  {
    id: '16',
    name: 'Scorpion Acid',
    price: 29.99,
    category: 'T-Shirt',
    images: [ScorpionAcidWashStringerWhite, ScorpionAcidWashStringerWhite2, ScorpionAcidWashStringerBlack],
    description: 'The Scorpion Acid Wash Stringer is crafted for those who demand both style and performance. Available in classic White and Black, this stringer features a unique acid wash finish and a bold scorpion logo. Lightweight, breathable, and cut for maximum range of motion—perfect for intense training or street style.',
    inStock: true,
    sizes: ['Small', 'Medium', 'Large', 'X-Large', '2X-Large', '3X-Large', '4X-Large'],
    sizingGuide: [
      { size: 'Small', length: 66.0, width: 24.3, sleeve: 0 },
      { size: 'Medium', length: 68.0, width: 26.3, sleeve: 0 },
      { size: 'Large', length: 71.0, width: 29.0, sleeve: 0 },
      { size: 'X-Large', length: 74.0, width: 32.3, sleeve: 0 },
      { size: '2X-Large', length: 76.0, width: 35.3, sleeve: 0 },
      { size: '3X-Large', length: 78.0, width: 38.3, sleeve: 0 },
      { size: '4X-Large', length: 80.0, width: 41.3, sleeve: 0 }
    ]
  }
];