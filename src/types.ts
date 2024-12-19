export interface Car {
  nbr: string
  car_class: string
  car_engine: string
  car_chassis: string
}

export interface Team {
  title: string
  country: string
  private_entrant: number
}

export interface Result {
  pos: string
  laps: number
  reason: string | null
  distance: number
  racing_time: string
}

export interface Driver {
  fname: string
  lname: string
  country: string
}

export interface CarFull {
  car: Car
  team: Team
  result: Result
  drivers: Driver[]
  event_date: string
}

export interface CarMiniature {
  car: CarFull
  manufacturer: CarMiniatureManufacturer
  scale: CarMiniatureScale
  buying_date: string
  car_id: string
  price: number
  comment: string | null
}

export enum CarMiniatureScale {
  SCALE_1_5 = '1:5',
  SCALE_1_6 = '1:6',
  SCALE_1_8 = '1:8',
  SCALE_1_10 = '1:10',
  SCALE_1_12 = '1:12',
  SCALE_1_18 = '1:18',
  SCALE_1_24 = '1:24',
  SCALE_1_25 = '1:25',
  SCALE_1_32 = '1:32',
  SCALE_1_35 = '1:35',
  SCALE_1_36 = '1:36',
  SCALE_1_43 = '1:43',
  SCALE_1_45 = '1:45',
  SCALE_1_48 = '1:48',
  SCALE_1_50 = '1:50',
  SCALE_1_64 = '1:64',
  SCALE_1_76 = '1:76',
  SCALE_1_87 = '1:87',
  SCALE_1_90 = '1:90',
  SCALE_1_160 = '1:160',
  SCALE_OTHER = 'Autre'
}

export enum CarMiniatureManufacturer {
  ALTAYA = 'Altaya',
  AUTOART = 'AUTOart',
  BBR_MODELS = 'BBR Models',
  BBURAGO = 'Bburago',
  BOS_MODELS = 'BoS-Models',
  BRUMM = 'Brumm',
  CARTRIX = 'Cartrix',
  CMC = 'CMC',
  CMR = 'CMR',
  EBBRO = 'Ebbro',
  GLM = 'GLM',
  GRUPPE_C = 'Gruppe C Motorsport Verlag',
  HERPA = 'Herpa',
  INNO64 = 'INNO64',
  IXO = 'IXO',
  KK_SCALE = 'KK-Scale',
  KYOSHO = 'Kyosho',
  LEMANS_MINIATURES = 'LeMans Miniatures',
  LOOKSMART = 'LookSmart',
  MAJORETTE = 'Majorette',
  MCG = 'MCG',
  MINI_GT = 'Mini GT',
  MINICHAMPS = 'Minichamps',
  MODEL_CAR_GROUP = 'ModelCarGroup',
  OTTOMOBILE = 'Ottomobile',
  OXFORD = 'Oxford',
  PORSCHE_AG = 'Porsche AG',
  REAL_ART_REPLICAS = 'RAR - Real Art Replicas',
  SCHUCO = 'Schuco',
  SHELBY_COLLECTIBLES = 'Shelby Collectibles',
  SOLIDO = 'Solido',
  SPARK = 'Spark',
  SPECIAL_C_125 = 'SpecialC.-125',
  SPECIAL_C_130 = 'SpecialC.-130',
  SPECIAL_C_133 = 'SpecialC.-133',
  SUN_STAR = 'Sun Star',
  TARMAC_WORKS = 'Tarmac Works',
  TECNOMODEL = 'Tecnomodel',
  TOP_MARQUES = 'TopMarques',
  TOP_SPEED = 'Top Speed',
  TROFEU = 'Trofeu',
  TRUE_SCALE = 'True Scale',
  TRUESCALE_MINIATURES = 'TrueScale Miniatures',
  WERK83 = 'Werk83',
  OTHER = 'Autre'
}
