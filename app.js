const STORAGE_KEY = "fleetflow-manager-v2";
const CLOUD_STATE_ROW_ID = "main";
const CLOUD_STATE_TABLE = "app_state";
const CLOUD_STORAGE_BUCKET = "fleet-files";
const VALID_PAGES = ["dashboard", "assets", "add-asset", "asset-detail", "technicians", "add-technician", "inventory", "maintenance", "maintenance-detail", "work-orders", "work-order-detail", "compliance", "documents"];
const IMPORTED_VEHICLES = [
  { assetNumber: "158", driverProject: "22-207 San Jose", year: "2003", make: "Chevrolet", model: "1500", licensePlate: "7E50520", vin: "1GCEC14X63Z317727", category: "Site", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "162", driverProject: "CJF", year: "2008", make: "Chevrolet", model: "1500", licensePlate: "8M84715", vin: "1GCEC14C78Z224106", category: "Unassigned", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "164", driverProject: "SITE (SOLD 08/15/2025)", year: "2008", make: "Chevrolet", model: "1500", licensePlate: "8M84717", vin: "1GCEC14C38Z231859", category: "Not Monitored", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "172", driverProject: "CJF", year: "2007", make: "Chevrolet", model: "2500", licensePlate: "7X70924", vin: "1GCHC24K17E600539", category: "Delivery", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "173", driverProject: "CJF", year: "2013", make: "Chevrolet", model: "1500", licensePlate: "72621F1", vin: "1GCNCPEA7DZ101061", category: "Unassigned", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "174", driverProject: "22-207 San Jose", year: "2013", make: "Chevrolet", model: "1500", licensePlate: "72622F1", vin: "1GCNCPEAXDZ115603", category: "Site", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "175", driverProject: "CJF", year: "2013", make: "Chevrolet", model: "1500", licensePlate: "72623F1", vin: "1GCNCPEAXDZ176918", category: "Unassigned", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "179", driverProject: "CJF", year: "2016", make: "Chevrolet", model: "1500", licensePlate: "39230A2", vin: "1GCNCNEC6GZ289131", category: "Unassigned", registrationRenewalDate: "May-26", registrationPaid: "TRUE", paidDate: "3/25/2026" },
  { assetNumber: "180", driverProject: "CJF", year: "2013", make: "Chevrolet", model: "1500", licensePlate: "08919J1", vin: "3GCPCPE04DG246929", category: "Unassigned", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "182", driverProject: "CJF", year: "2017", make: "Isuzu", model: "NPR-XD", licensePlate: "30257D2", vin: "JALC4W16XJ7K00236", category: "Delivery", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "183", driverProject: "WRECKED 07/08/2025", year: "2017", make: "Chevrolet", model: "1500", licensePlate: "62594G2", vin: "1GCNCNEC7HZ275028", category: "Not Monitored", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "184", driverProject: "Dante Williams", year: "2017", make: "Chevrolet", model: "1500", licensePlate: "42636H2", vin: "1GCNCNEC0HZ384866", category: "Foreman", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "185", driverProject: "22-216 Treasure Island", year: "2017", make: "Chevrolet", model: "1500", licensePlate: "42637H2", vin: "1GCNCNECXHZ382462", category: "Site", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "186", driverProject: "CJF", year: "2017", make: "Chevrolet", model: "1500", licensePlate: "42638H2", vin: "1GCNCNECXHZ385944", category: "Unassigned", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "187", driverProject: "CJF", year: "2017", make: "Chevrolet", model: "1500", licensePlate: "42945H2", vin: "1GCNCNEC8HZ383707", category: "Unassigned", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "188", driverProject: "Lew Frain (Totalled)", year: "2018", make: "Chevrolet", model: "Tahoe", licensePlate: "8AXZ807", vin: "1GNSKBKC8JR189622", category: "Not Monitored", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "189", driverProject: "Kaden Frain", year: "2018", make: "GMC", model: "1500", licensePlate: "35788J2", vin: "3GTU2PEJ8JG235989", category: "Not Monitored", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "193", driverProject: "Tyler Ash", year: "2018", make: "Chevrolet", model: "1500", licensePlate: "14950R2", vin: "1GCNCNECXJZ218389", category: "Foreman", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "194", driverProject: "Mike Wolff", year: "2017", make: "Chevrolet", model: "Equinox", licensePlate: "7VDA991", vin: "2GNALCEK0H6181389", category: "Foreman", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "195", driverProject: "Bing Louie", year: "2017", make: "Chevrolet", model: "Equinox", licensePlate: "7WYM915", vin: "2GNALCEK0H1576847", category: "Foreman", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "197", driverProject: "Chris Albert", year: "2019", make: "Chevrolet", model: "1500", licensePlate: "70084T2", vin: "3GCNWAEF1KG187965", category: "Foreman", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "198", driverProject: "Steven Pedersen", year: "2019", make: "Chevrolet", model: "1500", licensePlate: "70090T2", vin: "3GCNWAEF7KG192250", category: "Foreman", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "199", driverProject: "Erik Niewald", year: "2019", make: "Chevrolet", model: "1500", licensePlate: "92409U2", vin: "3GCUYGED8KG244511", category: "Not Monitored", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "200", driverProject: "CJF", year: "2019", make: "Chevrolet", model: "1500", licensePlate: "68029U2", vin: "3GCNWAEF9KG198129", category: "Unassigned", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "201", driverProject: "Gregory Mills", year: "2020", make: "Chevrolet", model: "1500", licensePlate: "63975W2", vin: "3GCNWAEFXLG115339", category: "Foreman", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "202", driverProject: "CJF", year: "2020", make: "Chevrolet", model: "1500", licensePlate: "63974W2", vin: "3GCNWAEF4LG111738", category: "Unassigned", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "203", driverProject: "Marcos Paez", year: "2017", make: "GMC", model: "1500", licensePlate: "74193N2", vin: "1GTN1LEC6HZ906006", category: "Foreman", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "204", driverProject: "Dustin King", year: "2020", make: "Chevrolet", model: "1500", licensePlate: "78996X2", vin: "3GCNWAEF9LG197547", category: "Foreman", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "205", driverProject: "Dan Simas", year: "2018", make: "Chevrolet", model: "Equinox", licensePlate: "8HMY713", vin: "2GNAXJEV4J6301011", category: "Office", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "207", driverProject: "CJF", year: "2018", make: "Chevrolet", model: "Equinox", licensePlate: "7XQB519", vin: "3GNAXHEV7JS504744", category: "Unassigned", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "208", driverProject: "Jose Gonzalez", year: "2020", make: "Chevrolet", model: "1500", licensePlate: "06711L3", vin: "3GCNWAEF2LG412203", category: "Foreman", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "209", driverProject: "Dave Sokotowski", year: "2022", make: "Chevrolet", model: "2500", licensePlate: "72384L3", vin: "1GC0WLE77NF119920", category: "Foreman", registrationRenewalDate: "May-26", registrationPaid: "TRUE", paidDate: "3/25/2026" },
  { assetNumber: "210", driverProject: "Carl Jenks", year: "2020", make: "Chevrolet", model: "1500", licensePlate: "30298P3", vin: "3GCNWAEF7LG451630", category: "Foreman", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "211", driverProject: "Barry Frain", year: "2023", make: "Chevrolet", model: "1500", licensePlate: "95717S3", vin: "3GCUDFED4PG216119", category: "Not Monitored", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "212", driverProject: "Shanon Baker", year: "2023", make: "Chevrolet", model: "Equinox", licensePlate: "9FNP206", vin: "3GNAXSEG8PL193018", category: "Office", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "213", driverProject: "Steve Frain", year: "2023", make: "Chevrolet", model: "Equinox", licensePlate: "9JHS613", vin: "3GNAXHEG1PL259833", category: "Office", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "214", driverProject: "CJF", year: "2022", make: "Chevrolet", model: "1500", licensePlate: "27940W3", vin: "3GCNAAED9NG681816", category: "Unassigned", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "215", driverProject: "Sean Rode", year: "2024", make: "Chevrolet", model: "Equinox", licensePlate: "9LFE315", vin: "3GNAXHEGXRL265424", category: "Foreman", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "216", driverProject: "Ryan Shatzer", year: "2023", make: "Chevrolet", model: "Equinox", licensePlate: "9LFE307", vin: "3GNAXHEG3RL273641", category: "Office", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "217", driverProject: "Janelle Frain", year: "2025", make: "Land Rover", model: "Range Rover", licensePlate: "9VDV246", vin: "SAL1L9E93SA491564", category: "Not Monitored", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "218", driverProject: "Joel Perez", year: "2023", make: "Chevrolet", model: "Equinox", licensePlate: "9SPS325", vin: "3GNAXKEG6PS166843", category: "Office", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "219", driverProject: "Chris Black", year: "2025", make: "Chevrolet", model: "1500", licensePlate: "40050F4", vin: "3GCNAAEDXSG239736", category: "Foreman", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "220", driverProject: "Nick Elliot", year: "2025", make: "Chevrolet", model: "1500", licensePlate: "40049F4", vin: "3GCNAAED0SG239731", category: "Office", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "221", driverProject: "Garrett Carpenter", year: "2025", make: "Chevrolet", model: "Equinox", licensePlate: "9UAW261", vin: "3GNAXHEG3SL299727", category: "Office", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "222", driverProject: "Antonio Zuniga", year: "2025", make: "Chevrolet", model: "Equinox", licensePlate: "9UPA940", vin: "3GNAXHEG2SL328490", category: "Office", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "223", driverProject: "Parker Baines", year: "2025", make: "Chevrolet", model: "3500", licensePlate: "30352H4", vin: "1GC4KSEY9SF346263", category: "Office", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
  { assetNumber: "224", driverProject: "Lew Frain", year: "2026", make: "Chevrolet", model: "Tahoe", licensePlate: "9XEM723", vin: "1GNS6NKD3TR161972", category: "Not Monitored", registrationRenewalDate: "", registrationPaid: "FALSE", paidDate: "" },
];
const IMPORTED_EQUIPMENT = [
  { equipmentNumber: "E1", projectLocation: "CJF", year: "2007", make: "Vermeer", model: "Trencher", modelNumber: "RT450", licensePlate: "", vinSerial: "1VRX0721871001396", engineSerial: "10244299", ein: "FL3U57", purchaseCost: "", purchaseDate: "1/1/2027", tier: "2", lowUse: "FALSE", hourMeterEnd2026: "816.00" },
  { equipmentNumber: "E2", projectLocation: "CJF", year: "2004", make: "Vermeer", model: "Trencher", modelNumber: "RT450", licensePlate: "", vinSerial: "1VRX0721431000224", engineSerial: "846018", ein: "KF9J49", purchaseCost: "", purchaseDate: "1/1/2004", tier: "1", lowUse: "TRUE", hourMeterEnd2026: "1252.00" },
  { equipmentNumber: "E3", projectLocation: "Treasure Island", year: "", make: "JLG", model: "Telehandler", modelNumber: "1255", licensePlate: "", vinSerial: "160107139", engineSerial: "22462372", ein: "RC8V83", purchaseCost: "", purchaseDate: "6/22/2021", tier: "4F", lowUse: "FALSE", hourMeterEnd2026: "1087.00" },
  { equipmentNumber: "E4", projectLocation: "CCCSD", year: "2001", make: "Gradall", model: "Telehandler", modelNumber: "534D-10", licensePlate: "", vinSerial: "366372", engineSerial: "46162483", ein: "DD6L93", purchaseCost: "", purchaseDate: "1/1/2001", tier: "1", lowUse: "FALSE", hourMeterEnd2026: "178.60" },
  { equipmentNumber: "E5", projectLocation: "San Jose", year: "2001", make: "Gradall", model: "Telehandler", modelNumber: "534D-10", licensePlate: "", vinSerial: "366494", engineSerial: "45957364", ein: "AP4W76", purchaseCost: "", purchaseDate: "1/1/2001", tier: "1", lowUse: "FALSE", hourMeterEnd2026: "423.90" },
  { equipmentNumber: "E6", projectLocation: "CJF", year: "1989", make: "Bobcat", model: "Skidsteer", modelNumber: "743", licensePlate: "", vinSerial: "501943865", engineSerial: "V17026680", ein: "TK7Y34", purchaseCost: "", purchaseDate: "1/1/1989", tier: "0", lowUse: "TRUE", hourMeterEnd2026: "194.00" },
  { equipmentNumber: "E7", projectLocation: "CJF", year: "2011", make: "Bobcat", model: "Skidsteer", modelNumber: "S630", licensePlate: "", vinSerial: "A3NT12950", engineSerial: "BJ0050", ein: "FP4Y96", purchaseCost: "", purchaseDate: "8/10/2017", tier: "4I", lowUse: "FALSE", hourMeterEnd2026: "1255.00" },
  { equipmentNumber: "E8", projectLocation: "CJF", year: "2011", make: "Bobcat", model: "Skidsteer", modelNumber: "S630", licensePlate: "", vinSerial: "A3NT12913", engineSerial: "BG0648", ein: "BM9E59", purchaseCost: "", purchaseDate: "8/10/2017", tier: "4I", lowUse: "FALSE", hourMeterEnd2026: "2099.00" },
  { equipmentNumber: "E9", projectLocation: "Treasure Island", year: "2021", make: "Bobcat", model: "Skidsteer", modelNumber: "S76", licensePlate: "", vinSerial: "B4CD13762", engineSerial: "DM02P001588LEL20", ein: "ST7D54", purchaseCost: "", purchaseDate: "11/8/2021", tier: "4F", lowUse: "FALSE", hourMeterEnd2026: "0.00" },
  { equipmentNumber: "E10", projectLocation: "CJF", year: "", make: "Water Wagon", model: "500GAL", modelNumber: "", licensePlate: "451247", vinSerial: "", engineSerial: "", ein: "N/A", purchaseCost: "", purchaseDate: "", tier: "", lowUse: "", hourMeterEnd2026: "N/A" },
  { equipmentNumber: "E11", projectLocation: "CJF", year: "", make: "Water Wagon", model: "500GAL", modelNumber: "", licensePlate: "486821", vinSerial: "", engineSerial: "", ein: "N/A", purchaseCost: "", purchaseDate: "", tier: "", lowUse: "", hourMeterEnd2026: "N/A" },
  { equipmentNumber: "E12", projectLocation: "CJF", year: "", make: "Water Wagon", model: "500GAL", modelNumber: "", licensePlate: "Missing", vinSerial: "", engineSerial: "", ein: "N/A", purchaseCost: "", purchaseDate: "", tier: "", lowUse: "", hourMeterEnd2026: "N/A" },
  { equipmentNumber: "E13", projectLocation: "CJF", year: "", make: "Water Wagon", model: "500GAL", modelNumber: "", licensePlate: "486721", vinSerial: "", engineSerial: "", ein: "N/A", purchaseCost: "", purchaseDate: "", tier: "", lowUse: "", hourMeterEnd2026: "N/A" },
  { equipmentNumber: "E14", projectLocation: "Treasure Island", year: "2007", make: "Sullivan", model: "Compressor", modelNumber: "D185PJD", licensePlate: "", vinSerial: "28834", engineSerial: "PE4024R000252", ein: "YY3D83", purchaseCost: "", purchaseDate: "1/1/2007", tier: "2", lowUse: "FALSE", hourMeterEnd2026: "0.00" },
  { equipmentNumber: "E15", projectLocation: "CJF", year: "", make: "Sullair", model: "Compressor", modelNumber: "", licensePlate: "", vinSerial: "", engineSerial: "", ein: "Not Registered", purchaseCost: "", purchaseDate: "", tier: "", lowUse: "FALSE", hourMeterEnd2026: "2036.90" },
  { equipmentNumber: "E16", projectLocation: "Modesto Library", year: "", make: "GENIE", model: "19ft Scissor", modelNumber: "GS1930", licensePlate: "N/A", vinSerial: "47800", engineSerial: "", ein: "N/A", purchaseCost: "", purchaseDate: "", tier: "", lowUse: "", hourMeterEnd2026: "N/A" },
  { equipmentNumber: "E17", projectLocation: "Don Pedro", year: "", make: "GENIE", model: "19ft Scissor", modelNumber: "GS1930", licensePlate: "", vinSerial: "47801", engineSerial: "", ein: "", purchaseCost: "", purchaseDate: "", tier: "", lowUse: "", hourMeterEnd2026: "" },
  { equipmentNumber: "E18", projectLocation: "CCCSD", year: "", make: "GENIE", model: "19ft Scissor", modelNumber: "GS1930", licensePlate: "N/A", vinSerial: "GS309-172211", engineSerial: "", ein: "N/A", purchaseCost: "$6,683.56", purchaseDate: "2/1/2025", tier: "", lowUse: "", hourMeterEnd2026: "N/A" },
  { equipmentNumber: "E19", projectLocation: "Modesto Library", year: "2017", make: "GENIE", model: "30ft Scissor", modelNumber: "GS3232", licensePlate: "N/A", vinSerial: "GS32P-154080", engineSerial: "", ein: "N/A", purchaseCost: "$9,047.00", purchaseDate: "12/12/2026", tier: "", lowUse: "", hourMeterEnd2026: "" },
  { equipmentNumber: "E20", projectLocation: "Don Pedro", year: "2017", make: "GENIE", model: "Single Man Lift", modelNumber: "GR-20", licensePlate: "N/A", vinSerial: "GRP-46577", engineSerial: "", ein: "N/A", purchaseCost: "$4,905.00", purchaseDate: "12/12/2026", tier: "", lowUse: "", hourMeterEnd2026: "" },
  { equipmentNumber: "E21", projectLocation: "Don Pedro", year: "", make: "GENIE", model: "19ft Scissor", modelNumber: "GS1930", licensePlate: "", vinSerial: "47801", engineSerial: "", ein: "", purchaseCost: "", purchaseDate: "", tier: "", lowUse: "", hourMeterEnd2026: "" },
];
const IMPORTED_TRAILERS = [
  { trailerNumber: "TR01", project: "SHOP", year: "1994", make: "", model: "BENDER", gvwr: "7,000LB", licensePlate: "4CX2655", vin: "" },
  { trailerNumber: "TR03", project: "SHOP", year: "2024", make: "BIG TEX", model: "14DF-17BK+3", gvwr: "14,000LB", licensePlate: "4WE1715", vin: "16V1C2525R4343639" },
  { trailerNumber: "TR05", project: "22-216", year: "", make: "", model: "ENCLOSED", gvwr: "", licensePlate: "", vin: "" },
  { trailerNumber: "TR06", project: "SHOP", year: "1994", make: "TEXAS BRAGG", model: "12-LA SCISSOR LIFT", gvwr: "7,000LB", licensePlate: "4DB1363", vin: "UNKNOWN" },
  { trailerNumber: "TR07", project: "SHOP", year: "", make: "", model: "WIRE", gvwr: "", licensePlate: "", vin: "" },
  { trailerNumber: "TR08", project: "22-313", year: "2024", make: "CJF", model: "Office Trailer", gvwr: "N/A", licensePlate: "N/A", vin: "N/A" },
  { trailerNumber: "TR09", project: "SHOP", year: "2026", make: "BIG TEX", model: "14OT-24GN", gvwr: "14,000LB", licensePlate: "4XC6647", vin: "16V1F3225T2421258" },
];

const state = loadState();
const assetCategories = loadAssetCategories();
let currentAssetFilter = "Vehicle";
let currentAssetSearch = "";
let currentAssetStatusFilter = "all";
let currentAssetDetailId = null;
let assetEditMode = false;
let currentMaintenanceDetailId = null;
let maintenanceEditMode = false;
let currentWorkOrderDetailId = null;
let workOrderPartDrafts = [];
let editingTechnicianId = null;
let editingInventoryId = null;
let editingWorkOrderTimeEntryId = null;
let editingWorkOrderPartId = null;
let currentInventorySearch = "";
let currentInventoryFilter = "all";
let supabaseClient = null;
let currentUser = null;
let isCloudMode = false;
let isHydratingRemoteState = false;
let hasLoadedRemoteState = false;
let saveRemoteStateTimeoutId = null;
let workOrderAutoSaveTimeoutId = null;
const INVENTORY_UOM_OPTIONS = ["Qt", "Gal", "Ea", "Pkg"];
const WORK_ORDER_STATUSES = ["Not Yet Started", "In Progress", "Waiting on Parts", "Complete"];
normalizeWorkOrderNumbers();

const pages = [...document.querySelectorAll(".page")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const jumpLinks = [...document.querySelectorAll("[data-target-page]")];
const assetFilterButtons = [...document.querySelectorAll("[data-asset-filter]")];
const assetTypeChoices = [...document.querySelectorAll("[data-asset-type-choice]")];
const authGate = document.querySelector("#authGate");
const appShell = document.querySelector("#appShell");
const authForm = document.querySelector("#authForm");
const authEmailInput = document.querySelector("#authEmail");
const authPasswordInput = document.querySelector("#authPassword");
const authMessage = document.querySelector("#authMessage");
const createAccountButton = document.querySelector("#createAccountButton");
const signOutButton = document.querySelector("#signOutButton");
const syncStatusText = document.querySelector("#syncStatusText");
const syncStatusSubtext = document.querySelector("#syncStatusSubtext");
const currentUserEmail = document.querySelector("#currentUserEmail");

const assetForm = document.querySelector("#assetForm");
const technicianForm = document.querySelector("#technicianForm");
const inventoryForm = document.querySelector("#inventoryForm");
const assetTypeSelect = document.querySelector("#assetTypeSelect");
const assetCategorySelect = document.querySelector("#assetCategorySelect");
const customCategoryWrap = document.querySelector("#customCategoryWrap");
const customCategoryInput = document.querySelector("#customCategoryInput");
const assetNumberLabel = document.querySelector("#assetNumberLabel");
const assetNumberInput = document.querySelector("#assetNumberInput");
const assetNameInput = document.querySelector("#assetNameInput");
const assetTypeFields = [...document.querySelectorAll(".type-field")];
const maintenanceForm = document.querySelector("#maintenanceForm");
const maintenanceVendorSelect = document.querySelector("#maintenanceVendorSelect");
const workOrderForm = document.querySelector("#workOrderForm");
const complianceForm = document.querySelector("#complianceForm");
const documentForm = document.querySelector("#documentForm");

const assetList = document.querySelector("#assetList");
const assetFilterSummary = document.querySelector("#assetFilterSummary");
const assetSearchInput = document.querySelector("#assetSearchInput");
const assetStatusFilter = document.querySelector("#assetStatusFilter");
const maintenanceList = document.querySelector("#maintenanceList");
const workOrderList = document.querySelector("#workOrderList");
const toolboxList = document.querySelector("#toolboxList");
const completedWorkOrderList = document.querySelector("#completedWorkOrderList");
const workOrderDetailTitle = document.querySelector("#workOrderDetailTitle");
const workOrderStatusActions = document.querySelector("#workOrderStatusActions");
const workOrderDetailSummary = document.querySelector("#workOrderDetailSummary");
const printWorkOrderSheet = document.querySelector("#printWorkOrderSheet");
const workOrderTimeEntryList = document.querySelector("#workOrderTimeEntryList");
const technicianList = document.querySelector("#technicianList");
const technicianSummary = document.querySelector("#technicianSummary");
const inventoryList = document.querySelector("#inventoryList");
const inventorySummary = document.querySelector("#inventorySummary");
const inventorySearchInput = document.querySelector("#inventorySearchInput");
const inventoryFilterSelect = document.querySelector("#inventoryFilterSelect");
const complianceList = document.querySelector("#complianceList");
const documentList = document.querySelector("#documentList");
const dashboardAlerts = document.querySelector("#dashboardAlerts");
const dashboardToolbox = document.querySelector("#dashboardToolbox");
const assetDetailTitle = document.querySelector("#assetDetailTitle");
const maintenanceDetailTitle = document.querySelector("#maintenanceDetailTitle");
const maintenanceDetailCard = document.querySelector("#maintenanceDetailCard");
const assetDetailCard = document.querySelector("#assetDetailCard");
const assetDetailMaintenance = document.querySelector("#assetDetailMaintenance");
const assetDetailWorkOrders = document.querySelector("#assetDetailWorkOrders");
const assetDetailCompliance = document.querySelector("#assetDetailCompliance");
const assetDetailDocuments = document.querySelector("#assetDetailDocuments");
const editAssetButton = document.querySelector("#editAssetButton");
const deactivateAssetButton = document.querySelector("#deactivateAssetButton");
const deleteAssetButton = document.querySelector("#deleteAssetButton");
const editMaintenanceButton = document.querySelector("#editMaintenanceButton");
const deleteMaintenanceButton = document.querySelector("#deleteMaintenanceButton");
const startTimerButton = document.querySelector("#startTimerButton");
const stopTimerButton = document.querySelector("#stopTimerButton");
const printWorkOrderButton = document.querySelector("#printWorkOrderButton");
const deleteWorkOrderButton = document.querySelector("#deleteWorkOrderButton");

const assetCount = document.querySelector("#assetCount");
const openWorkOrderCount = document.querySelector("#openWorkOrderCount");
const maintenanceCount = document.querySelector("#maintenanceCount");
const alertCount = document.querySelector("#alertCount");

const maintenanceAssetSelect = document.querySelector("#maintenanceAssetSelect");
const maintenanceAssetTypeSelect = document.querySelector("#maintenanceAssetTypeSelect");
const maintenanceAssetNumberDisplay = document.querySelector("#maintenanceAssetNumberDisplay");
const maintenanceAssetYearDisplay = document.querySelector("#maintenanceAssetYearDisplay");
const maintenanceAssetMakeDisplay = document.querySelector("#maintenanceAssetMakeDisplay");
const maintenanceAssetModelDisplay = document.querySelector("#maintenanceAssetModelDisplay");
const maintenanceAssetPlateDisplay = document.querySelector("#maintenanceAssetPlateDisplay");
const maintenanceAssetSerialDisplay = document.querySelector("#maintenanceAssetSerialDisplay");
const maintenanceAssetCategoryDisplay = document.querySelector("#maintenanceAssetCategoryDisplay");
const workOrderAssetSelect = document.querySelector("#workOrderAssetSelect");
const workOrderAssetTypeSelect = document.querySelector("#workOrderAssetTypeSelect");
const workOrderAssetNumberDisplay = document.querySelector("#workOrderAssetNumberDisplay");
const workOrderAssetYearDisplay = document.querySelector("#workOrderAssetYearDisplay");
const workOrderAssetMakeDisplay = document.querySelector("#workOrderAssetMakeDisplay");
const workOrderAssetModelDisplay = document.querySelector("#workOrderAssetModelDisplay");
const workOrderAssetPlateDisplay = document.querySelector("#workOrderAssetPlateDisplay");
const workOrderAssetSerialDisplay = document.querySelector("#workOrderAssetSerialDisplay");
const workOrderAssetCategoryDisplay = document.querySelector("#workOrderAssetCategoryDisplay");
const workOrderDetailForm = document.querySelector("#workOrderDetailForm");
const addWorkOrderPartButton = document.querySelector("#addWorkOrderPartButton");
const manualTimeEntryForm = document.querySelector("#manualTimeEntryForm");
const laborCostDisplay = document.querySelector("#laborCostDisplay");
const workOrderPartComposer = document.querySelector("#workOrderPartComposer");
const workOrderPartList = document.querySelector("#workOrderPartList");
const workOrderTechnicianSelect = document.querySelector("#workOrderTechnicianSelect");
const workOrderDetailTechnicianSelect = document.querySelector("#workOrderDetailTechnicianSelect");
const workOrderDetailTechnicianRate = document.querySelector("#workOrderDetailTechnicianRate");
const workOrderTimerDisplay = document.querySelector("#workOrderTimerDisplay");
const workOrderAutoSaveStatus = document.querySelector("#workOrderAutoSaveStatus");
const complianceAssetSelect = document.querySelector("#complianceAssetSelect");
const documentAssetSelect = document.querySelector("#documentAssetSelect");
let workOrderTimerIntervalId = null;

if (assetForm) assetForm.addEventListener("submit", handleAssetSubmit);
if (technicianForm) technicianForm.addEventListener("submit", handleTechnicianSubmit);
if (inventoryForm) inventoryForm.addEventListener("submit", handleInventorySubmit);
if (assetTypeSelect) assetTypeSelect.addEventListener("change", handleAssetTypeChange);
if (maintenanceAssetTypeSelect) maintenanceAssetTypeSelect.addEventListener("change", handleMaintenanceAssetTypeChange);
if (maintenanceAssetSelect) maintenanceAssetSelect.addEventListener("change", handleMaintenanceAssetSelectionChange);
if (workOrderAssetTypeSelect) workOrderAssetTypeSelect.addEventListener("change", handleWorkOrderAssetTypeChange);
if (workOrderAssetSelect) workOrderAssetSelect.addEventListener("change", handleWorkOrderAssetSelectionChange);
if (workOrderDetailForm) workOrderDetailForm.addEventListener("submit", handleWorkOrderDetailSubmit);
if (addWorkOrderPartButton) addWorkOrderPartButton.addEventListener("click", handleAddWorkOrderPartDraft);
if (manualTimeEntryForm) manualTimeEntryForm.addEventListener("submit", handleManualTimeEntrySubmit);
if (manualTimeEntryForm) manualTimeEntryForm.addEventListener("change", handleManualTimeEntryFormChange);
if (startTimerButton) startTimerButton.addEventListener("click", handleStartWorkOrderTimer);
if (stopTimerButton) stopTimerButton.addEventListener("click", handleStopWorkOrderTimer);
if (printWorkOrderButton) printWorkOrderButton.addEventListener("click", handlePrintWorkOrder);
if (deleteWorkOrderButton) deleteWorkOrderButton.addEventListener("click", handleDeleteWorkOrder);
if (workOrderDetailForm) workOrderDetailForm.addEventListener("change", handleWorkOrderDetailFormChange);
if (workOrderPartComposer) workOrderPartComposer.addEventListener("change", handleWorkOrderPartComposerChange);
if (workOrderPartComposer) workOrderPartComposer.addEventListener("click", handleWorkOrderPartComposerClick);
if (deactivateAssetButton) deactivateAssetButton.addEventListener("click", handleAssetDeactivate);
if (deleteAssetButton) deleteAssetButton.addEventListener("click", handleAssetDelete);
if (editMaintenanceButton) editMaintenanceButton.addEventListener("click", () => {
  maintenanceEditMode = true;
  renderMaintenanceDetail();
});
if (deleteMaintenanceButton) deleteMaintenanceButton.addEventListener("click", handleDeleteMaintenanceLog);
window.addEventListener("afterprint", () => {
  document.body.classList.remove("print-mode");
});
if (editAssetButton) {
  editAssetButton.addEventListener("click", () => {
    assetEditMode = true;
    renderAssetDetail();
  });
}
if (assetCategorySelect) assetCategorySelect.addEventListener("change", handleAssetCategoryChange);
maintenanceForm.addEventListener("submit", handleMaintenanceSubmit);
if (maintenanceVendorSelect) {
  maintenanceVendorSelect.addEventListener("change", () => {
    handleMaintenanceVendorSelection(maintenanceVendorSelect);
  });
}
workOrderForm.addEventListener("submit", handleWorkOrderSubmit);
complianceForm.addEventListener("submit", handleComplianceSubmit);
documentForm.addEventListener("submit", handleDocumentSubmit);
if (authForm) authForm.addEventListener("submit", handleAuthSignIn);
if (createAccountButton) createAccountButton.addEventListener("click", handleCreateAccount);
if (signOutButton) signOutButton.addEventListener("click", handleSignOut);

navLinks.forEach((button) => {
  button.addEventListener("click", () => handlePageTarget(button.dataset.page));
});

jumpLinks.forEach((button) => {
  button.addEventListener("click", () => handlePageTarget(button.dataset.targetPage));
});

assetFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentAssetFilter = button.dataset.assetFilter;
    renderAssets();
  });
});

if (assetSearchInput) {
  assetSearchInput.addEventListener("input", (event) => {
    currentAssetSearch = event.target.value.trim().toLowerCase();
    renderAssets();
  });
}

if (assetStatusFilter) {
  assetStatusFilter.addEventListener("change", (event) => {
    currentAssetStatusFilter = event.target.value;
    renderAssets();
  });
}

if (inventorySearchInput) {
  inventorySearchInput.addEventListener("input", (event) => {
    currentInventorySearch = event.target.value.trim().toLowerCase();
    renderInventory();
  });
}

if (inventoryFilterSelect) {
  inventoryFilterSelect.addEventListener("change", (event) => {
    currentInventoryFilter = event.target.value;
    renderInventory();
  });
}

assetTypeChoices.forEach((button) => {
  button.addEventListener("click", () => {
    assetTypeSelect.value = button.dataset.assetTypeChoice;
    handleAssetTypeChange();
    highlightAssetTypeChoice();
  });
});

window.addEventListener("hashchange", syncPageFromHash);

initApp();

function loadState() {
  const defaults = {
    assets: [],
    technicians: [],
    inventoryItems: [],
    maintenanceLogs: [],
    maintenanceVendors: ["Con J Franke Electric", "Jiffylube", "Les Schwab", "Brannon Tire", "Larrys Auto"],
    workOrders: [],
    workOrderSequenceByYear: {},
    complianceRecords: [],
    documents: [],
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaults, ...saved } : defaults;
  } catch (error) {
    console.warn("Could not load saved fleet data.", error);
    return defaults;
  }
}

async function initApp() {
  render();
  syncPageFromHash();
  updateCloudStatus("Local mode", "This browser is currently using local saved data.");

  const supabaseConfig = window.FLEET_HUB_SUPABASE_CONFIG;
  if (!supabaseConfig?.url || !supabaseConfig?.anonKey || !window.supabase?.createClient) {
    return;
  }

  try {
    supabaseClient = window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey);
    isCloudMode = true;
    toggleAuthUi(false);
    updateCloudStatus("Cloud mode", "Checking Supabase session...");

    const { data: sessionData } = await supabaseClient.auth.getSession();
    await handleAuthStateChange(sessionData.session || null);

    supabaseClient.auth.onAuthStateChange(async (_event, session) => {
      await handleAuthStateChange(session || null);
    });
  } catch (error) {
    console.error("Supabase setup failed.", error);
    updateCloudStatus("Local mode", "Supabase setup failed. The app is using local saved data.");
  }
}

function normalizeWorkOrderNumbers() {
  const sequenceByYear = { ...(state.workOrderSequenceByYear || {}) };

  state.workOrders.forEach((order) => {
    order.status = normalizeWorkOrderStatus(order.status);

    const existingMatch = String(order.workOrderNumber || "").match(/^WO-(\d{2})(\d{3})$/);
    if (existingMatch) {
      const yearCode = existingMatch[1];
      const value = Number.parseInt(existingMatch[2], 10) || 0;
      sequenceByYear[yearCode] = Math.max(Number(sequenceByYear[yearCode] || 0), value);
      return;
    }

    const createdAt = order.createdAt ? new Date(order.createdAt) : new Date();
    const yearCode = String(createdAt.getFullYear()).slice(-2);
    const nextValue = Math.max(Number(sequenceByYear[yearCode] || 0), 0) + 1;
    order.workOrderNumber = `WO-${yearCode}${String(nextValue).padStart(3, "0")}`;
    sequenceByYear[yearCode] = nextValue;
  });

  state.workOrderSequenceByYear = sequenceByYear;
}

function normalizeWorkOrderStatus(status) {
  const value = String(status || "").trim();
  if (value === "Open") {
    return "Not Yet Started";
  }
  if (value === "Waiting Parts") {
    return "Waiting on Parts";
  }
  if (value === "Completed") {
    return "Complete";
  }
  return WORK_ORDER_STATUSES.includes(value) ? value : "Not Yet Started";
}

function getWorkOrderStatusLabel(status) {
  return normalizeWorkOrderStatus(status);
}

function isWorkOrderComplete(status) {
  return normalizeWorkOrderStatus(status) === "Complete";
}

function getWorkOrderStatusClass(status) {
  const normalized = normalizeWorkOrderStatus(status);
  if (normalized === "Not Yet Started") {
    return "status-blue";
  }
  if (normalized === "In Progress") {
    return "status-yellow";
  }
  if (normalized === "Waiting on Parts") {
    return "status-red";
  }
  if (normalized === "Complete") {
    return "status-green";
  }
  return "";
}

function loadAssetCategories() {
  const defaults = {
    Vehicle: [
      "Pickup Truck",
      "Service Truck",
      "Bucket Truck",
      "Dump Truck",
      "Van",
      "SUV",
      "Passenger Car",
    ],
    Equipment: [
      "Generator",
      "Compressor",
      "Forklift",
      "Excavator",
      "Skid Steer",
      "Lift",
      "Welder",
    ],
    Trailer: [
      "Utility Trailer",
      "Equipment Trailer",
      "Dump Trailer",
      "Gooseneck Trailer",
      "Flatbed Trailer",
      "Enclosed Trailer",
    ],
  };

  const importedVehicleCategories = [...new Set(IMPORTED_VEHICLES.map((vehicle) => vehicle.category).filter(Boolean))];
  defaults.Vehicle = [...new Set([...importedVehicleCategories, ...defaults.Vehicle])];
  const importedEquipmentCategories = [...new Set(IMPORTED_EQUIPMENT.map((item) => item.model).filter(Boolean))];
  defaults.Equipment = [...new Set([...importedEquipmentCategories, ...defaults.Equipment])];
  const importedTrailerCategories = [...new Set(IMPORTED_TRAILERS.map((item) => item.model).filter(Boolean))];
  defaults.Trailer = [...new Set([...importedTrailerCategories, ...defaults.Trailer])];
  return defaults;
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  scheduleRemotePersist();
}

function render() {
  seedImportedVehicles();
  syncCompletedWorkOrdersToMaintenance();
  if (maintenanceVendorSelect) {
    const selectedVendor = maintenanceVendorSelect.value === "__new__" ? "" : maintenanceVendorSelect.value;
    maintenanceVendorSelect.innerHTML = buildMaintenanceVendorOptions(selectedVendor);
  }
  renderAssetCategoryOptions(assetTypeSelect.value);
  highlightAssetTypeChoice();
  renderSelectOptions();
  renderSummary();
  renderAssets();
  renderTechnicians();
  renderInventory();
  renderMaintenance();
  renderWorkOrders();
  renderCompliance();
  renderDocuments();
  renderDashboard();
  persist();
}

function toggleAuthUi(isSignedIn) {
  if (authGate) authGate.classList.toggle("hidden-panel", isSignedIn || !isCloudMode);
  if (appShell) appShell.classList.toggle("hidden-panel", isCloudMode && !isSignedIn);
  if (signOutButton) signOutButton.classList.toggle("hidden-panel", !isCloudMode || !isSignedIn);
  if (!isSignedIn && currentUserEmail) currentUserEmail.textContent = "";
}

function updateCloudStatus(title, message) {
  if (syncStatusText) syncStatusText.textContent = title;
  if (syncStatusSubtext) syncStatusSubtext.textContent = message;
}

function setWorkOrderAutoSaveStatus(message) {
  if (workOrderAutoSaveStatus) {
    workOrderAutoSaveStatus.textContent = message;
  }
}

async function handleAuthSignIn(event) {
  event.preventDefault();
  if (!supabaseClient) {
    return;
  }

  const email = authEmailInput?.value?.trim();
  const password = authPasswordInput?.value || "";
  if (!email || !password) {
    if (authMessage) authMessage.textContent = "Enter your email and password.";
    return;
  }

  try {
    if (authMessage) authMessage.textContent = "Signing in...";
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;
    if (authMessage) authMessage.textContent = "";
    if (authPasswordInput) authPasswordInput.value = "";
  } catch (error) {
    console.error("Sign in failed.", error);
    if (authMessage) authMessage.textContent = error.message || "Sign in failed.";
  }
}

async function handleCreateAccount() {
  if (!supabaseClient) {
    return;
  }

  const email = authEmailInput?.value?.trim();
  const password = authPasswordInput?.value || "";
  if (!email || !password) {
    if (authMessage) authMessage.textContent = "Enter an email and password first.";
    return;
  }

  try {
    if (authMessage) authMessage.textContent = "Creating account...";
    const { error } = await supabaseClient.auth.signUp({ email, password });
    if (error) throw error;
    if (authMessage) authMessage.textContent = "";
  } catch (error) {
    console.error("Create account failed.", error);
    if (authMessage) authMessage.textContent = error.message || "Could not create account.";
  }
}

async function handleSignOut() {
  if (!supabaseClient) {
    return;
  }

  await supabaseClient.auth.signOut();
}

function buildSerializableState() {
  return {
    assets: state.assets,
    technicians: state.technicians,
    inventoryItems: state.inventoryItems,
    maintenanceLogs: state.maintenanceLogs,
    maintenanceVendors: state.maintenanceVendors,
    workOrders: state.workOrders,
    workOrderSequenceByYear: state.workOrderSequenceByYear,
    complianceRecords: state.complianceRecords,
    documents: state.documents,
    savedAt: new Date().toISOString(),
  };
}

async function handleAuthStateChange(session) {
  currentUser = session?.user || null;
  toggleAuthUi(Boolean(currentUser));

  if (!currentUser) {
    hasLoadedRemoteState = false;
    if (currentUserEmail) currentUserEmail.textContent = "";
    updateCloudStatus("Cloud mode", "Sign in to access the shared Fleet Hub workspace.");
    return;
  }

  if (currentUserEmail) currentUserEmail.textContent = currentUser.email || "";
  updateCloudStatus("Cloud mode", "Loading shared fleet data...");
  await loadRemoteState();
  render();
  syncPageFromHash();
  updateCloudStatus("Cloud mode", "Connected to shared Fleet Hub data.");
}

async function loadRemoteState() {
  if (!supabaseClient || !currentUser) {
    return;
  }

  const { data, error } = await supabaseClient
    .from(CLOUD_STATE_TABLE)
    .select("payload")
    .eq("id", CLOUD_STATE_ROW_ID)
    .single();

  if (error && error.code !== "PGRST116") {
    throw error;
  }

  isHydratingRemoteState = true;
  try {
    if (data?.payload && Object.keys(data.payload).length) {
      const merged = {
        ...loadState(),
        ...data.payload,
      };
      Object.keys(merged).forEach((key) => {
        state[key] = merged[key];
      });
      normalizeWorkOrderNumbers();
    } else {
      await scheduleRemotePersist(true);
    }
    hasLoadedRemoteState = true;
  } finally {
    isHydratingRemoteState = false;
  }
}

async function persistRemoteStateNow() {
  if (!isCloudMode || !supabaseClient || !currentUser || isHydratingRemoteState || !hasLoadedRemoteState) {
    return;
  }

  const { error } = await supabaseClient
    .from(CLOUD_STATE_TABLE)
    .upsert({
      id: CLOUD_STATE_ROW_ID,
      payload: buildSerializableState(),
      updated_at: new Date().toISOString(),
    });

  if (error) {
    throw error;
  }
}

function scheduleRemotePersist(immediate = false) {
  if (!isCloudMode || !supabaseClient || !currentUser || isHydratingRemoteState || !hasLoadedRemoteState) {
    return Promise.resolve();
  }

  if (saveRemoteStateTimeoutId) {
    window.clearTimeout(saveRemoteStateTimeoutId);
  }

  const delay = immediate ? 0 : 350;
  return new Promise((resolve) => {
    saveRemoteStateTimeoutId = window.setTimeout(async () => {
      saveRemoteStateTimeoutId = null;
      try {
        await persistRemoteStateNow();
        updateCloudStatus("Cloud mode", `Synced shared data${currentUser?.email ? ` for ${currentUser.email}` : ""}.`);
      } catch (error) {
        console.error("Cloud save failed.", error);
        updateCloudStatus("Cloud mode", "Cloud save failed. Local changes are still in this browser.");
      } finally {
        resolve();
      }
    }, delay);
  });
}

function buildMaintenanceVendorOptions(selectedValue = "") {
  const normalizedValue = String(selectedValue || "").trim();
  const options = [
    `<option value="">Select vendor</option>`,
    ...(state.maintenanceVendors || []).map((vendor) => (
      `<option value="${escapeHtml(vendor)}" ${normalizedValue === vendor ? "selected" : ""}>${escapeHtml(vendor)}</option>`
    )),
  ];

  if (normalizedValue && !(state.maintenanceVendors || []).includes(normalizedValue)) {
    options.push(`<option value="${escapeHtml(normalizedValue)}" selected>${escapeHtml(normalizedValue)}</option>`);
  }

  options.push(`<option value="__new__">Add new vendor</option>`);
  return options.join("");
}

function addMaintenanceVendor(vendorName) {
  const normalizedVendor = String(vendorName || "").trim();
  if (!normalizedVendor) {
    return "";
  }

  const existingVendor = (state.maintenanceVendors || []).find(
    (vendor) => vendor.toLowerCase() === normalizedVendor.toLowerCase(),
  );

  if (existingVendor) {
    return existingVendor;
  }

  state.maintenanceVendors = [...(state.maintenanceVendors || []), normalizedVendor];
  return normalizedVendor;
}

function handleMaintenanceVendorSelection(selectElement) {
  if (!selectElement) {
    return;
  }

  if (selectElement.value !== "__new__") {
    return;
  }

  const vendorName = window.prompt("Enter the new vendor name:");
  const savedVendor = addMaintenanceVendor(vendorName);
  if (!savedVendor) {
    selectElement.value = "";
    return;
  }

  selectElement.innerHTML = buildMaintenanceVendorOptions(savedVendor);
  persist();
}

function renderAssetCategoryOptions(assetType) {
  const categories = assetCategories[assetType] || [];
  updateAssetFieldVisibility(assetType);

  if (!assetType) {
    assetCategorySelect.innerHTML = `<option value="">Select asset type first</option>`;
    assetCategorySelect.disabled = true;
    customCategoryWrap.classList.add("hidden-field");
    customCategoryInput.required = false;
    customCategoryInput.value = "";
    return;
  }

  const options = [
    `<option value="">Select category</option>`,
    ...categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`),
    `<option value="__custom__">+ Add new category</option>`,
  ];

  assetCategorySelect.innerHTML = options.join("");
  assetCategorySelect.disabled = false;
  customCategoryWrap.classList.add("hidden-field");
  customCategoryInput.required = false;
  customCategoryInput.value = "";
}

function renderEditAssetCategoryOptions(assetType, selectedCategory = "") {
  const categories = assetCategories[assetType] || [];
  updateEditAssetFieldVisibility(assetType);

  if (!assetType) {
    editAssetCategorySelect.innerHTML = `<option value="">Select asset type first</option>`;
    editAssetCategorySelect.disabled = true;
    editCustomCategoryWrap.classList.add("hidden-field");
    editCustomCategoryInput.required = false;
    editCustomCategoryInput.value = "";
    return;
  }

  const useCustom = selectedCategory && !categories.includes(selectedCategory);
  const options = [
    `<option value="">Select category</option>`,
    ...categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`),
    `<option value="__custom__">+ Add new category</option>`,
  ];

  editAssetCategorySelect.innerHTML = options.join("");
  editAssetCategorySelect.disabled = false;

  if (useCustom) {
    editAssetCategorySelect.value = "__custom__";
    editCustomCategoryWrap.classList.remove("hidden-field");
    editCustomCategoryInput.required = true;
    editCustomCategoryInput.value = selectedCategory;
  } else {
    editAssetCategorySelect.value = selectedCategory || "";
    editCustomCategoryWrap.classList.add("hidden-field");
    editCustomCategoryInput.required = false;
    editCustomCategoryInput.value = "";
  }
}

function seedImportedVehicles() {
  const importedAssets = [
    ...IMPORTED_VEHICLES.map(createVehicleAssetFromImport),
    ...IMPORTED_EQUIPMENT.map(createEquipmentAssetFromImport),
    ...IMPORTED_TRAILERS.map(createTrailerAssetFromImport),
  ];

  const importedByKey = new Map(
    importedAssets.map((asset) => [buildAssetImportKey(asset), asset])
  );

  state.assets = state.assets.map((asset) => {
    const importedMatch = importedByKey.get(buildAssetImportKey(asset));
    if (!importedMatch) {
      return asset;
    }

    return {
      ...importedMatch,
      ...asset,
      assetNumber: asset.assetNumber || importedMatch.assetNumber || "",
      trailerNumber: asset.trailerNumber || importedMatch.trailerNumber || "",
      equipmentNumber: asset.equipmentNumber || importedMatch.equipmentNumber || "",
      make: asset.make || importedMatch.make || "",
      model: asset.model || importedMatch.model || "",
      modelNumber: asset.modelNumber || importedMatch.modelNumber || "",
      licensePlate: asset.licensePlate || importedMatch.licensePlate || "",
      vin: asset.vin || importedMatch.vin || "",
      vinSerial: asset.vinSerial || importedMatch.vinSerial || "",
      engineSerial: asset.engineSerial || importedMatch.engineSerial || "",
      ein: asset.ein || importedMatch.ein || "",
      gvwr: asset.gvwr || importedMatch.gvwr || "",
      category: asset.category || importedMatch.category || "",
      location: asset.location || importedMatch.location || "",
      unitNumber: asset.unitNumber || importedMatch.unitNumber || "",
      serial: asset.serial || importedMatch.serial || "",
      name: asset.name || importedMatch.name || "",
      active: asset.active !== false,
    };
  });

  const existingKeys = new Set(state.assets.map((asset) => buildAssetImportKey(asset)));
  const missingImportedAssets = importedAssets.filter((asset) => !existingKeys.has(buildAssetImportKey(asset)));

  if (missingImportedAssets.length > 0) {
    state.assets = [...state.assets, ...missingImportedAssets];
  }
}

function handleAssetTypeChange() {
  renderAssetCategoryOptions(assetTypeSelect.value);
  highlightAssetTypeChoice();
}

function handleEditAssetTypeChange() {
  renderEditAssetCategoryOptions(editAssetTypeSelect.value);
}

function highlightAssetTypeChoice() {
  assetTypeChoices.forEach((button) => {
    button.classList.toggle("active", button.dataset.assetTypeChoice === assetTypeSelect.value);
  });
}

function updateAssetFieldVisibility(assetType) {
  const numberLabel = assetType === "Trailer" ? "Trailer #" : assetType === "Equipment" ? "Equipment #" : "Asset #";
  assetNumberLabel.textContent = numberLabel;
  assetNumberInput.placeholder = assetType === "Trailer" ? "TR01" : assetType === "Equipment" ? "E1" : "158";
  assetNameInput.required = assetType === "Vehicle";

  assetTypeFields.forEach((field) => {
    const supportedTypes = (field.dataset.types || "").split(",").map((item) => item.trim()).filter(Boolean);
    const shouldShow = Boolean(assetType) && supportedTypes.includes(assetType);
    field.classList.toggle("hidden-field", !shouldShow);

    field.querySelectorAll("input, select, textarea").forEach((input) => {
      if (!shouldShow) {
        input.value = "";
      }
    });
  });
}

function updateEditAssetFieldVisibility(assetType) {
  const numberLabel = assetType === "Trailer" ? "Trailer #" : assetType === "Equipment" ? "Equipment #" : "Asset #";
  editAssetNumberLabel.textContent = numberLabel;
  editAssetNumberInput.placeholder = assetType === "Trailer" ? "TR01" : assetType === "Equipment" ? "E1" : "158";
  editAssetNameInput.required = assetType === "Vehicle";

  editAssetTypeFields.forEach((field) => {
    const supportedTypes = (field.dataset.types || "").split(",").map((item) => item.trim()).filter(Boolean);
    const shouldShow = Boolean(assetType) && supportedTypes.includes(assetType);
    field.classList.toggle("hidden-field", !shouldShow);
  });
}

function handleAssetCategoryChange() {
  const useCustom = assetCategorySelect.value === "__custom__";
  customCategoryWrap.classList.toggle("hidden-field", !useCustom);
  customCategoryInput.required = useCustom;

  if (!useCustom) {
    customCategoryInput.value = "";
  }
}

function handleEditAssetCategoryChange() {
  const useCustom = editAssetCategorySelect.value === "__custom__";
  editCustomCategoryWrap.classList.toggle("hidden-field", !useCustom);
  editCustomCategoryInput.required = useCustom;

  if (!useCustom) {
    editCustomCategoryInput.value = "";
  }
}

function syncPageFromHash() {
  const page = window.location.hash.replace("#", "");
  const resolvedPage = page === "add-inventory" ? "inventory" : page;
  setActivePage(VALID_PAGES.includes(resolvedPage) ? resolvedPage : "dashboard", false);
}

function handlePageTarget(pageName) {
  if (pageName === "add-inventory") {
    if (inventoryForm) inventoryForm.reset();
    setActivePage("inventory");
    return;
  }

  if (pageName === "add-asset") {
    if (assetForm) assetForm.reset();
    if (assetTypeSelect) assetTypeSelect.value = "";
    renderAssetCategoryOptions("");
    highlightAssetTypeChoice();
  }

  if (pageName === "add-technician") {
    if (technicianForm) technicianForm.reset();
  }

  if (pageName === "maintenance") {
    if (maintenanceForm) maintenanceForm.reset();
    if (maintenanceAssetTypeSelect) maintenanceAssetTypeSelect.value = "";
    if (maintenanceVendorSelect) maintenanceVendorSelect.innerHTML = buildMaintenanceVendorOptions("");
    populateMaintenanceAssetOptions();
  }
  setActivePage(pageName);
}

function getNavPageName(pageName) {
  if (pageName === "add-asset" || pageName === "asset-detail") {
    return "assets";
  }

  if (pageName === "add-technician") {
    return "technicians";
  }

  if (pageName === "work-order-detail") {
    return "work-orders";
  }

  if (pageName === "maintenance-detail") {
    return "maintenance";
  }

  return pageName;
}

function setActivePage(pageName, updateHash = true) {
  pages.forEach((page) => {
    page.classList.toggle("active", page.dataset.page === pageName);
  });

  if (pageName !== "work-order-detail" && workOrderTimerIntervalId) {
    window.clearInterval(workOrderTimerIntervalId);
    workOrderTimerIntervalId = null;
  }

  const activeNavPage = getNavPageName(pageName);

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.page === activeNavPage);
  });

  if (pageName === "asset-detail") {
    renderAssetDetail();
  }

  if (pageName === "work-order-detail") {
    renderWorkOrderDetail();
  }

  if (pageName === "maintenance-detail") {
    renderMaintenanceDetail();
  }

  if (updateHash) {
    window.location.hash = pageName;
  }
}

function renderSelectOptions() {
  const options = state.assets.length
    ? state.assets.map((asset) => `<option value="${asset.id}">${escapeHtml(asset.name)} (${escapeHtml(asset.type)})</option>`).join("")
    : `<option value="">Add an asset first</option>`;
  const technicianOptions = [
    `<option value="">Unassigned</option>`,
    ...state.technicians.map((tech) => `<option value="${escapeHtml(tech.name)}">${escapeHtml(tech.name)} - ${escapeHtml(tech.title)}</option>`),
  ].join("");
  [complianceAssetSelect, documentAssetSelect].forEach((select) => {
    select.innerHTML = options;
    select.disabled = state.assets.length === 0;
  });

  workOrderTechnicianSelect.innerHTML = technicianOptions;
  if (workOrderDetailTechnicianSelect) {
    workOrderDetailTechnicianSelect.innerHTML = technicianOptions;
  }
  populateMaintenanceAssetOptions();
  populateWorkOrderAssetOptions();
}

function handleMaintenanceAssetTypeChange() {
  populateMaintenanceAssetOptions();
}

function handleMaintenanceAssetSelectionChange() {
  const asset = state.assets.find((item) => item.id === maintenanceAssetSelect.value);
  populateMaintenanceAssetFields(asset);
}

function populateMaintenanceAssetOptions() {
  if (!maintenanceAssetTypeSelect || !maintenanceAssetSelect) {
    return;
  }

  const selectedType = maintenanceAssetTypeSelect.value;

  if (!selectedType) {
    maintenanceAssetSelect.innerHTML = `<option value="">Select asset type first</option>`;
    maintenanceAssetSelect.disabled = true;
    populateMaintenanceAssetFields(null);
    return;
  }

  const filteredAssets = state.assets
    .filter((asset) => asset.type === selectedType)
    .sort((a, b) => getAssetNumberLabel(a).localeCompare(getAssetNumberLabel(b), undefined, { numeric: true, sensitivity: "base" }));

  if (!filteredAssets.length) {
    maintenanceAssetSelect.innerHTML = `<option value="">No ${selectedType.toLowerCase()} assets available</option>`;
    maintenanceAssetSelect.disabled = true;
    populateMaintenanceAssetFields(null);
    return;
  }

  const previousValue = maintenanceAssetSelect.value;
  maintenanceAssetSelect.innerHTML = [
    `<option value="">Select asset #</option>`,
    ...filteredAssets.map((asset) => `<option value="${asset.id}">${escapeHtml(getAssetNumberLabel(asset))} - ${escapeHtml(buildAssetDisplayName(asset))}</option>`),
  ].join("");
  maintenanceAssetSelect.disabled = false;
  maintenanceAssetSelect.value = filteredAssets.some((asset) => asset.id === previousValue) ? previousValue : "";
  handleMaintenanceAssetSelectionChange();
}

function handleWorkOrderAssetTypeChange() {
  populateWorkOrderAssetOptions();
}

function handleWorkOrderAssetSelectionChange() {
  const asset = state.assets.find((item) => item.id === workOrderAssetSelect.value);
  populateWorkOrderAssetFields(asset);
}

function populateWorkOrderAssetOptions() {
  const selectedType = workOrderAssetTypeSelect.value;

  if (!selectedType) {
    workOrderAssetSelect.innerHTML = `<option value="">Select asset type first</option>`;
    workOrderAssetSelect.disabled = true;
    populateWorkOrderAssetFields(null);
    return;
  }

  const filteredAssets = state.assets
    .filter((asset) => asset.type === selectedType)
    .sort((a, b) => getAssetNumberLabel(a).localeCompare(getAssetNumberLabel(b), undefined, { numeric: true, sensitivity: "base" }));

  if (!filteredAssets.length) {
    workOrderAssetSelect.innerHTML = `<option value="">No ${selectedType.toLowerCase()} assets available</option>`;
    workOrderAssetSelect.disabled = true;
    populateWorkOrderAssetFields(null);
    return;
  }

  const previousValue = workOrderAssetSelect.value;
  workOrderAssetSelect.innerHTML = [
    `<option value="">Select asset #</option>`,
    ...filteredAssets.map((asset) => `<option value="${asset.id}">${escapeHtml(getAssetNumberLabel(asset))} - ${escapeHtml(buildAssetDisplayName(asset))}</option>`),
  ].join("");
  workOrderAssetSelect.disabled = false;

  if (filteredAssets.some((asset) => asset.id === previousValue)) {
    workOrderAssetSelect.value = previousValue;
  } else {
    workOrderAssetSelect.value = "";
  }

  handleWorkOrderAssetSelectionChange();
}

function getAssetNumberLabel(asset) {
  return asset.assetNumber || asset.equipmentNumber || asset.trailerNumber || asset.unitNumber || "Unnumbered";
}

function populateWorkOrderAssetFields(asset) {
  if (!asset) {
    workOrderAssetNumberDisplay.value = "";
    workOrderAssetYearDisplay.value = "";
    workOrderAssetMakeDisplay.value = "";
    workOrderAssetModelDisplay.value = "";
    workOrderAssetPlateDisplay.value = "";
    workOrderAssetSerialDisplay.value = "";
    workOrderAssetCategoryDisplay.value = "";
    return;
  }

  workOrderAssetNumberDisplay.value = getAssetNumberLabel(asset);
  workOrderAssetYearDisplay.value = asset.year || "";
  workOrderAssetMakeDisplay.value = asset.make || "";
  workOrderAssetModelDisplay.value = asset.model || "";
  workOrderAssetPlateDisplay.value = asset.licensePlate || "";
  workOrderAssetSerialDisplay.value = asset.vin || asset.vinSerial || "";
  workOrderAssetCategoryDisplay.value = asset.category || "";
}

function populateMaintenanceAssetFields(asset) {
  if (!maintenanceAssetNumberDisplay) {
    return;
  }

  if (!asset) {
    maintenanceAssetNumberDisplay.value = "";
    maintenanceAssetYearDisplay.value = "";
    maintenanceAssetMakeDisplay.value = "";
    maintenanceAssetModelDisplay.value = "";
    maintenanceAssetPlateDisplay.value = "";
    maintenanceAssetSerialDisplay.value = "";
    maintenanceAssetCategoryDisplay.value = "";
    return;
  }

  maintenanceAssetNumberDisplay.value = getAssetNumberLabel(asset);
  maintenanceAssetYearDisplay.value = asset.year || "";
  maintenanceAssetMakeDisplay.value = asset.make || "";
  maintenanceAssetModelDisplay.value = asset.model || "";
  maintenanceAssetPlateDisplay.value = asset.licensePlate || "";
  maintenanceAssetSerialDisplay.value = asset.vin || asset.vinSerial || "";
  maintenanceAssetCategoryDisplay.value = asset.category || "";
}

function renderSummary() {
  const openOrders = state.workOrders.filter((order) => !isWorkOrderComplete(order.status)).length;
  const alerts = getComplianceAlerts();

  assetCount.textContent = state.assets.length;
  openWorkOrderCount.textContent = openOrders;
  maintenanceCount.textContent = state.maintenanceLogs.length;
  alertCount.textContent = alerts.length;
}

function renderDashboard() {
  const alerts = getComplianceAlerts()
    .sort((a, b) => (a.expirationDate || "").localeCompare(b.expirationDate || ""))
    .slice(0, 5);
  const toolboxItems = state.workOrders.filter((order) => order.toolboxActive && !isWorkOrderComplete(order.status)).slice(0, 5);

  dashboardAlerts.innerHTML = renderCollection(alerts, (record) => {
    const alertState = getAlertState(record.expirationDate);
    return `
      <article class="record-card">
        <header>
          <div>
            <h4>${escapeHtml(record.requirementType)}</h4>
            <div class="meta">
              <span>${escapeHtml(getAssetName(record.assetId))}</span>
              <span>Expires ${formatDate(record.expirationDate)}</span>
            </div>
          </div>
          <span class="pill ${alertState.className}">${escapeHtml(alertState.label)}</span>
        </header>
      </article>
    `;
  });

  dashboardToolbox.innerHTML = renderCollection(toolboxItems, (order) => `
    <article class="record-card">
      <header>
        <div>
          <h4>${escapeHtml(order.title)}</h4>
          <div class="meta">
            <span>${escapeHtml(getAssetName(order.assetId))}</span>
            <span>${escapeHtml(order.priority)} priority</span>
          </div>
        </div>
        <span class="pill ${getWorkOrderStatusClass(order.status)}">${escapeHtml(getWorkOrderStatusLabel(order.status))}</span>
      </header>
      <p>${escapeHtml(order.description || "No form details entered.")}</p>
    </article>
  `);
}

function renderAssets() {
  const filteredAssets = state.assets.filter((asset) => {
    if (asset.type !== currentAssetFilter) {
      return false;
    }

    if (currentAssetStatusFilter === "active" && asset.active === false) {
      return false;
    }

    if (currentAssetStatusFilter === "inactive" && asset.active !== false) {
      return false;
    }

    if (!currentAssetSearch) {
      return true;
    }

    const haystack = [
      buildAssetDisplayName(asset),
      getAssetNumberLabel(asset),
      asset.category,
      asset.year,
      asset.make,
      asset.model,
      asset.licensePlate,
      asset.vin,
      asset.vinSerial,
      asset.location,
      asset.notes,
    ].join(" ").toLowerCase();

    return haystack.includes(currentAssetSearch);
  });
  const label = currentAssetFilter === "Vehicle" ? "vehicles" : currentAssetFilter === "Equipment" ? "equipment items" : "trailers";
  const totalByType = state.assets.filter((asset) => asset.type === currentAssetFilter).length;
  assetFilterSummary.textContent = filteredAssets.length === totalByType
    ? `${filteredAssets.length} ${label}`
    : `${filteredAssets.length} of ${totalByType} ${label}`;

  assetFilterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.assetFilter === currentAssetFilter);
  });

  assetList.innerHTML = renderCollection(filteredAssets, (asset) => `
    <button class="record-card record-button" data-asset-id="${asset.id}">
      <header>
        <div>
          <h4>${escapeHtml(buildAssetDisplayName(asset))}</h4>
          <div class="asset-card-subtitle">${escapeHtml(asset.type)}</div>
        </div>
        <span class="pill ${asset.active === false ? "inactive" : ""}">${escapeHtml(asset.active === false ? "Inactive" : asset.location || "Active")}</span>
      </header>
      <div class="asset-card-grid">${buildAssetSummaryMeta(asset)}</div>
      ${buildAssetSecondaryDetails(asset)}
    </button>
  `);

  document.querySelectorAll("[data-asset-id]").forEach((button) => {
    button.addEventListener("click", () => openAssetDetail(button.dataset.assetId));
  });
}

function renderTechnicians() {
  technicianSummary.textContent = `${state.technicians.length} technicians`;
  technicianList.innerHTML = renderCollection(state.technicians, (tech) => `
    <article class="record-card">
      ${editingTechnicianId === tech.id ? `
        <form class="inline-edit-form technician-edit-form" data-technician-form-id="${tech.id}">
          <div class="detail-grid">
            <label><span>Name</span><input name="name" value="${escapeHtml(tech.name || "")}" required></label>
            <label><span>Title</span><input name="title" value="${escapeHtml(tech.title || "")}"></label>
            <label><span>Hourly Rate</span><input name="hourlyRate" value="${escapeHtml(formatCurrencyValue(tech.hourlyRate))}"></label>
          </div>
          <div class="action-row form-actions">
            <button type="submit" class="button-primary">Save Changes</button>
            <button type="button" class="button-secondary" data-technician-cancel="${tech.id}">Cancel</button>
            <button type="button" class="button-danger" data-technician-delete="${tech.id}">Delete</button>
          </div>
        </form>
      ` : `
        <header>
          <div>
            <h4>${escapeHtml(tech.name)}</h4>
            <div class="meta">
              <span>${escapeHtml(tech.title)}</span>
              <span>Hourly Rate: ${escapeHtml(formatCurrencyValue(tech.hourlyRate, "Not set"))}</span>
            </div>
          </div>
          <span class="pill">Technician</span>
        </header>
        <div class="action-row">
          <button type="button" class="button-secondary" data-technician-edit="${tech.id}">Edit</button>
          <button type="button" class="button-danger" data-technician-delete="${tech.id}">Delete</button>
        </div>
      `}
    </article>
  `);

  document.querySelectorAll("[data-technician-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      editingTechnicianId = button.dataset.technicianEdit;
      renderTechnicians();
    });
  });

  document.querySelectorAll("[data-technician-cancel]").forEach((button) => {
    button.addEventListener("click", () => {
      editingTechnicianId = null;
      renderTechnicians();
    });
  });

  document.querySelectorAll("[data-technician-delete]").forEach((button) => {
    button.addEventListener("click", () => handleTechnicianDelete(button.dataset.technicianDelete));
  });

  document.querySelectorAll(".technician-edit-form").forEach((form) => {
    form.addEventListener("submit", handleTechnicianEditSubmit);
  });
}

function renderInventory() {
  const filteredItems = state.inventoryItems.filter((item) => {
    if (currentInventoryFilter === "priced" && !parseCurrency(item.price)) {
      return false;
    }

    if (currentInventoryFilter === "missing-price" && parseCurrency(item.price)) {
      return false;
    }

    if (["qt", "gal", "ea", "pkg"].includes(currentInventoryFilter) && String(item.uom || "").toLowerCase() !== currentInventoryFilter) {
      return false;
    }

    if (!currentInventorySearch) {
      return true;
    }

    const haystack = [
      item.name,
      item.partNumber,
      item.vendor,
      item.uom,
      item.price,
    ].join(" ").toLowerCase();

    return haystack.includes(currentInventorySearch);
  });

  inventorySummary.textContent = filteredItems.length === state.inventoryItems.length
    ? `${state.inventoryItems.length} inventory items`
    : `${filteredItems.length} of ${state.inventoryItems.length} inventory items`;
  inventoryList.innerHTML = renderCollection(filteredItems, (item) => `
    <article class="record-card">
      ${editingInventoryId === item.id ? `
        <form class="inline-edit-form inventory-edit-form" data-inventory-form-id="${item.id}">
          <div class="detail-grid">
            <label><span>Item Name</span><input name="name" value="${escapeHtml(item.name || "")}" required></label>
            <label><span>Part Number</span><input name="partNumber" value="${escapeHtml(item.partNumber || "")}"></label>
            <label><span>Vendor</span><input name="vendor" value="${escapeHtml(item.vendor || "")}"></label>
            <label>
              <span>UOM</span>
              <select name="uom" required>
                ${buildUomOptions(item.uom)}
              </select>
            </label>
            <label><span>Price</span><input name="price" value="${escapeHtml(formatCurrencyValue(item.price))}"></label>
          </div>
          <div class="action-row form-actions">
            <button type="submit" class="button-primary">Save Changes</button>
            <button type="button" class="button-secondary" data-inventory-cancel="${item.id}">Cancel</button>
            <button type="button" class="button-danger" data-inventory-delete="${item.id}">Delete</button>
          </div>
        </form>
      ` : `
        <header>
          <div>
            <h4>${escapeHtml(item.name)}</h4>
            <div class="asset-card-subtitle">Inventory Item</div>
          </div>
          <span class="pill">${escapeHtml(formatCurrencyValue(item.price, "No price"))}</span>
        </header>
        <div class="asset-card-grid">${buildInventorySummaryMeta(item)}</div>
        ${buildInventorySecondaryDetails(item)}
        <div class="action-row">
          <button type="button" class="button-secondary" data-inventory-edit="${item.id}">Edit</button>
          <button type="button" class="button-danger" data-inventory-delete="${item.id}">Delete</button>
        </div>
      `}
    </article>
  `);

  document.querySelectorAll("[data-inventory-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      editingInventoryId = button.dataset.inventoryEdit;
      renderInventory();
    });
  });

  document.querySelectorAll("[data-inventory-cancel]").forEach((button) => {
    button.addEventListener("click", () => {
      editingInventoryId = null;
      renderInventory();
    });
  });

  document.querySelectorAll("[data-inventory-delete]").forEach((button) => {
    button.addEventListener("click", () => handleInventoryDelete(button.dataset.inventoryDelete));
  });

  document.querySelectorAll(".inventory-edit-form").forEach((form) => {
    form.addEventListener("submit", handleInventoryEditSubmit);
  });
}

function renderMaintenance() {
  const items = [...state.maintenanceLogs].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  maintenanceList.innerHTML = renderCollection(items, (log) => `
    <button class="record-card record-button" data-maintenance-id="${log.id}">
      <header>
        <div>
          <h4>${escapeHtml(log.serviceType)}</h4>
          <div class="meta">
            <span>${escapeHtml(getAssetName(log.assetId))}</span>
            <span>${formatDate(log.date)}</span>
            <span>Meter: ${escapeHtml(log.meter || "N/A")}</span>
          </div>
        </div>
        ${log.nextDueDate ? `<span class="pill">Next due ${formatDate(log.nextDueDate)}</span>` : ""}
      </header>
      <p>${escapeHtml(log.summary || "No summary entered.")}</p>
      <div class="meta">
        <span>Vendor: ${escapeHtml(log.vendor || "Not set")}</span>
        <span>Cost: ${escapeHtml(formatCurrencyValue(log.cost, "N/A"))}</span>
        ${log.sourceWorkOrderNumber ? `<span>From ${escapeHtml(log.sourceWorkOrderNumber)}</span>` : ""}
        ${log.fileName ? `<span>${escapeHtml(log.fileName)}</span>` : ""}
      </div>
      ${getAttachmentUrl(log) ? `<p><a href="${getAttachmentUrl(log)}" download="${escapeHtml(log.fileName || "maintenance-file")}">Download attachment</a></p>` : ""}
    </button>
  `);

  document.querySelectorAll("[data-maintenance-id]").forEach((button) => {
    button.addEventListener("click", () => openMaintenanceDetail(button.dataset.maintenanceId));
  });
}

function renderWorkOrders() {
  const items = [...state.workOrders].sort((a, b) => Number(isWorkOrderComplete(a.status)) - Number(isWorkOrderComplete(b.status)));
  workOrderList.innerHTML = renderCollection(items, (order) => `
    <button class="record-card record-button" data-work-order-id="${order.id}">
      <header>
        <div>
          <h4>${escapeHtml(order.title)}</h4>
          <div class="meta">
            <span>${escapeHtml(getWorkOrderNumber(order))}</span>
            <span>${escapeHtml(getAssetName(order.assetId))}</span>
            <span>Assigned: ${escapeHtml(order.assignedTo || "Unassigned")}</span>
            <span>Due: ${formatDate(order.dueDate)}</span>
          </div>
        </div>
        <span class="pill ${getWorkOrderStatusClass(order.status)}">${escapeHtml(getWorkOrderStatusLabel(order.status))}</span>
      </header>
      <div class="meta">
        <span>Priority: ${escapeHtml(order.priority)}</span>
        <span>${order.toolboxActive ? "Tool box active form" : "Standard work order"}</span>
        <span>Hours: ${escapeHtml(calculateWorkOrderHours(order).toFixed(2))}</span>
        <span>Labor: ${escapeHtml(formatCurrency(calculateWorkOrderLaborCost(order)))}</span>
      </div>
      <p>${escapeHtml(order.description || "No description entered.")}</p>
      <p>${escapeHtml(order.findings || "Open this work order to fill the full service form.")}</p>
    </button>
  `);

  const toolboxItems = state.workOrders.filter((order) => order.toolboxActive && !isWorkOrderComplete(order.status));
  toolboxList.innerHTML = renderCollection(toolboxItems, (order) => `
    <button class="record-card record-button" data-work-order-id="${order.id}">
      <header>
        <div>
          <h4>${escapeHtml(order.title)}</h4>
          <div class="meta">
            <span>${escapeHtml(getWorkOrderNumber(order))}</span>
            <span>${escapeHtml(getAssetName(order.assetId))}</span>
            <span>${escapeHtml(order.priority)} priority</span>
          </div>
        </div>
        <span class="pill ${getWorkOrderStatusClass(order.status)}">${escapeHtml(getWorkOrderStatusLabel(order.status))}</span>
      </header>
      <p>${escapeHtml(order.description || "No form details entered.")}</p>
      <div class="meta">
        <span>Assigned: ${escapeHtml(order.assignedTo || "Unassigned")}</span>
        <span>Due: ${formatDate(order.dueDate)}</span>
        <span>Hours: ${escapeHtml(calculateWorkOrderHours(order).toFixed(2))}</span>
      </div>
    </button>
  `);

  if (completedWorkOrderList) {
    completedWorkOrderList.innerHTML = document.querySelector("#emptyStateTemplate").innerHTML;
  }

  document.querySelectorAll("[data-work-order-id]").forEach((button) => {
    button.addEventListener("click", () => openWorkOrderDetail(button.dataset.workOrderId));
  });
}

function renderCompliance() {
  const items = [...state.complianceRecords].sort((a, b) => (a.expirationDate || "").localeCompare(b.expirationDate || ""));
  complianceList.innerHTML = renderCollection(items, (record) => {
    const alertState = getAlertState(record.expirationDate);
    return `
      <article class="record-card">
        <header>
          <div>
            <h4>${escapeHtml(record.requirementType)}</h4>
            <div class="meta">
              <span>${escapeHtml(getAssetName(record.assetId))}</span>
              <span>${escapeHtml(record.provider || "No provider")}</span>
              <span>Ref: ${escapeHtml(record.reference || "N/A")}</span>
            </div>
          </div>
          <span class="pill ${alertState.className}">${escapeHtml(alertState.label)}</span>
        </header>
        <div class="meta">
          <span>Effective: ${formatDate(record.effectiveDate)}</span>
          <span>Expires: ${formatDate(record.expirationDate)}</span>
        </div>
        <p>${escapeHtml(record.notes || "No notes entered.")}</p>
      </article>
    `;
  });
}

function renderDocuments() {
  const items = [...state.documents].sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
  documentList.innerHTML = renderCollection(items, (doc) => `
    <article class="record-card">
      <header>
        <div>
          <h4>${escapeHtml(doc.title)}</h4>
          <div class="meta">
            <span>${escapeHtml(getAssetName(doc.assetId))}</span>
            <span>${escapeHtml(doc.category)}</span>
            <span>${escapeHtml(doc.fileName || "No file attached")}</span>
          </div>
        </div>
        <span class="pill">${formatDate(doc.createdAt)}</span>
      </header>
      <p>${escapeHtml(doc.notes || "No notes entered.")}</p>
      ${getAttachmentUrl(doc) ? `<p><a href="${getAttachmentUrl(doc)}" download="${escapeHtml(doc.fileName || "document")}">Download file</a></p>` : ""}
    </article>
  `);
}

function handleAssetSubmit(event) {
  event.preventDefault();
  const formData = new FormData(assetForm);
  const type = formData.get("type");
  const categoryValue = formData.get("category");
  const customCategory = formData.get("customCategory").trim();
  const category = categoryValue === "__custom__" ? customCategory : categoryValue;

  if (!type || !category) {
    return;
  }

  if (categoryValue === "__custom__" && !assetCategories[type].includes(customCategory)) {
    assetCategories[type].push(customCategory);
  }

  state.assets.unshift(createAssetFromForm(formData, type, category));

  currentAssetFilter = type;
  assetForm.reset();
  renderAssetCategoryOptions("");
  highlightAssetTypeChoice();
  render();
  setActivePage("assets");
}

function handleAssetEditSubmit(event) {
  event.preventDefault();
  const asset = state.assets.find((item) => item.id === currentAssetDetailId);

  if (!asset) {
    return;
  }

  const formData = new FormData(event.currentTarget);
  const updatedAsset = createInlineEditedAsset(formData, asset);

  const index = state.assets.findIndex((item) => item.id === asset.id);
  state.assets[index] = updatedAsset;
  currentAssetFilter = asset.type;
  assetEditMode = false;
  render();
  renderAssetDetail();
}

function handleAssetDeactivate() {
  const asset = state.assets.find((item) => item.id === currentAssetDetailId);

  if (!asset) {
    return;
  }

  asset.active = asset.active === false ? true : false;
  render();
  renderAssetDetail();
}

function handleAssetDelete() {
  const asset = state.assets.find((item) => item.id === currentAssetDetailId);

  if (!asset) {
    return;
  }

  if (!window.confirm(`Delete ${buildAssetDisplayName(asset)}? This cannot be undone.`)) {
    return;
  }

  state.assets = state.assets.filter((item) => item.id !== asset.id);
  currentAssetDetailId = null;
  assetEditMode = false;
  render();
  setActivePage("assets");
}

function handleTechnicianSubmit(event) {
  event.preventDefault();
  const formData = new FormData(technicianForm);

  state.technicians.unshift({
    id: createId(),
    name: formData.get("name").trim(),
    title: formData.get("title").trim(),
    hourlyRate: normalizeCurrencyInput(formData.get("hourlyRate")),
  });

  technicianForm.reset();
  render();
  setActivePage("technicians");
}

function handleTechnicianEditSubmit(event) {
  event.preventDefault();
  const technicianId = event.currentTarget.dataset.technicianFormId;
  const technician = state.technicians.find((item) => item.id === technicianId);
  if (!technician) {
    return;
  }

  const oldName = technician.name;
  const formData = new FormData(event.currentTarget);
  technician.name = formData.get("name").trim();
  technician.title = formData.get("title").trim();
  technician.hourlyRate = normalizeCurrencyInput(formData.get("hourlyRate"));

  state.workOrders.forEach((order) => {
    if (order.assignedTo === oldName) {
      order.assignedTo = technician.name;
      order.hourlyRate = technician.hourlyRate;
    }
  });

  editingTechnicianId = null;
  render();
}

function handleTechnicianDelete(technicianId) {
  const technician = state.technicians.find((item) => item.id === technicianId);
  if (!technician) {
    return;
  }

  if (!window.confirm(`Delete technician ${technician.name}? This cannot be undone.`)) {
    return;
  }

  state.technicians = state.technicians.filter((item) => item.id !== technicianId);
  state.workOrders.forEach((order) => {
    if (order.assignedTo === technician.name) {
      order.assignedTo = "";
      order.hourlyRate = "";
    }
  });
  editingTechnicianId = null;
  render();
}

function handleInventorySubmit(event) {
  event.preventDefault();
  const formData = new FormData(inventoryForm);
  const uom = sanitizeInventoryUom(formData.get("uom"));

  if (!uom) {
    return;
  }

  state.inventoryItems.unshift({
    id: createId(),
    name: formData.get("name").trim(),
    partNumber: formData.get("partNumber").trim(),
    vendor: formData.get("vendor").trim(),
    uom,
    price: normalizeCurrencyInput(formData.get("price")),
  });

  inventoryForm.reset();
  render();
  setActivePage("inventory");
}

function handleInventoryEditSubmit(event) {
  event.preventDefault();
  const inventoryId = event.currentTarget.dataset.inventoryFormId;
  const item = state.inventoryItems.find((entry) => entry.id === inventoryId);
  if (!item) {
    return;
  }

  const formData = new FormData(event.currentTarget);
  item.name = formData.get("name").trim();
  item.partNumber = formData.get("partNumber").trim();
  item.vendor = formData.get("vendor").trim();
  item.uom = sanitizeInventoryUom(formData.get("uom")) || item.uom;
  item.price = normalizeCurrencyInput(formData.get("price"));

  state.workOrders.forEach((order) => {
    (order.parts || []).forEach((part) => {
      if (part.inventoryItemId === item.id) {
        part.name = item.name;
        part.partNumber = item.partNumber;
        part.vendor = item.vendor;
        part.uom = item.uom;
        part.price = item.price;
      }
    });
    order.partsUsed = buildWorkOrderPartsText(order);
  });

  editingInventoryId = null;
  render();
}

function handleInventoryDelete(inventoryId) {
  const item = state.inventoryItems.find((entry) => entry.id === inventoryId);
  if (!item) {
    return;
  }

  if (!window.confirm(`Delete inventory item ${item.name}? Existing work-order history will stay in place.`)) {
    return;
  }

  state.inventoryItems = state.inventoryItems.filter((entry) => entry.id !== inventoryId);
  editingInventoryId = null;
  render();
}

async function handleMaintenanceSubmit(event) {
  event.preventDefault();
  const formData = new FormData(maintenanceForm);
  const file = formData.get("file");
  const uploadedFile = await saveAttachmentFile(file, "maintenance");
  state.maintenanceLogs.unshift({
    id: createId(),
    assetId: formData.get("assetId"),
    date: formData.get("date"),
    serviceType: formData.get("serviceType").trim(),
    vendor: String(formData.get("vendorSelect") || "").trim(),
    meter: formData.get("meter").trim(),
    summary: formData.get("summary").trim(),
    nextDueDate: formData.get("nextDueDate"),
    cost: normalizeCurrencyInput(formData.get("cost")),
    fileName: uploadedFile.fileName,
    fileDataUrl: uploadedFile.fileDataUrl,
    fileUrl: uploadedFile.fileUrl,
    fileStoragePath: uploadedFile.fileStoragePath,
    sourceWorkOrderId: "",
    sourceWorkOrderNumber: "",
    createdAt: new Date().toISOString(),
  });

  maintenanceForm.reset();
  if (maintenanceAssetTypeSelect) maintenanceAssetTypeSelect.value = "";
  if (maintenanceVendorSelect) maintenanceVendorSelect.innerHTML = buildMaintenanceVendorOptions("");
  populateMaintenanceAssetOptions();
  render();
  setActivePage("maintenance");
}

function openMaintenanceDetail(logId) {
  currentMaintenanceDetailId = logId;
  maintenanceEditMode = false;
  setActivePage("maintenance-detail");
}

function renderMaintenanceDetail() {
  const log = state.maintenanceLogs.find((item) => item.id === currentMaintenanceDetailId);
  if (!log) {
    maintenanceDetailTitle.textContent = "Maintenance Log Detail";
    maintenanceDetailCard.innerHTML = document.querySelector("#emptyStateTemplate").innerHTML;
    return;
  }

  const asset = state.assets.find((item) => item.id === log.assetId);
  maintenanceDetailTitle.textContent = log.serviceType || "Maintenance Log Detail";

  maintenanceDetailCard.innerHTML = maintenanceEditMode
    ? buildMaintenanceEditCard(log)
    : `
      <article class="record-card">
        <header>
          <div>
            <h4>${escapeHtml(log.serviceType)}</h4>
            <div class="meta">
              <span>${escapeHtml(asset ? buildAssetDisplayName(asset) : getAssetName(log.assetId))}</span>
              <span>${formatDate(log.date)}</span>
              <span>Asset #: ${escapeHtml(asset ? getAssetNumberLabel(asset) : "Not set")}</span>
              ${log.sourceWorkOrderNumber ? `<span>${escapeHtml(log.sourceWorkOrderNumber)}</span>` : ""}
            </div>
          </div>
          ${log.nextDueDate ? `<span class="pill">Next due ${formatDate(log.nextDueDate)}</span>` : ""}
        </header>
        <div class="detail-grid">
          ${buildMaintenanceDetailFields(log, asset)}
        </div>
        <p>${escapeHtml(log.summary || "No summary entered.")}</p>
        ${buildMaintenanceAttachmentPreview(log)}
      </article>
    `;

  const editForm = document.querySelector("#maintenanceDetailEditForm");
  if (editForm) {
    editForm.addEventListener("submit", handleMaintenanceEditSubmit);

    const vendorSelect = editForm.querySelector('[name="vendorSelect"]');
    if (vendorSelect) {
      vendorSelect.addEventListener("change", () => {
        handleMaintenanceVendorSelection(vendorSelect);
      });
    }
  }

  const cancelButton = document.querySelector("#cancelMaintenanceEditButton");
  if (cancelButton) {
    cancelButton.addEventListener("click", () => {
      maintenanceEditMode = false;
      renderMaintenanceDetail();
    });
  }
}

async function handleMaintenanceEditSubmit(event) {
  event.preventDefault();
  const log = state.maintenanceLogs.find((item) => item.id === currentMaintenanceDetailId);
  if (!log) {
    return;
  }

  const formData = new FormData(event.currentTarget);
  const file = formData.get("file");
  log.date = formData.get("date");
  log.serviceType = formData.get("serviceType").trim();
  log.vendor = String(formData.get("vendorSelect") || "").trim();
  log.meter = formData.get("meter").trim();
  log.summary = formData.get("summary").trim();
  log.nextDueDate = formData.get("nextDueDate");
  log.cost = normalizeCurrencyInput(formData.get("cost"));

  if (file && file.size) {
    const uploadedFile = await saveAttachmentFile(file, "maintenance");
    log.fileName = uploadedFile.fileName;
    log.fileDataUrl = uploadedFile.fileDataUrl;
    log.fileUrl = uploadedFile.fileUrl;
    log.fileStoragePath = uploadedFile.fileStoragePath;
  }

  maintenanceEditMode = false;
  render();
  setActivePage("maintenance-detail");
}

function handleDeleteMaintenanceLog() {
  const log = state.maintenanceLogs.find((item) => item.id === currentMaintenanceDetailId);
  if (!log) {
    return;
  }

  if (!window.confirm(`Delete maintenance log "${log.serviceType}"? This cannot be undone.`)) {
    return;
  }

  state.maintenanceLogs = state.maintenanceLogs.filter((item) => item.id !== log.id);
  currentMaintenanceDetailId = null;
  maintenanceEditMode = false;
  render();
  setActivePage("maintenance");
}

function handleWorkOrderSubmit(event) {
  event.preventDefault();
  const formData = new FormData(workOrderForm);
  const workOrderNumber = generateWorkOrderNumber();
  const workOrder = {
    id: createId(),
    workOrderNumber,
    assetId: formData.get("assetId"),
    assetType: formData.get("assetType"),
    title: formData.get("title").trim(),
    priority: formData.get("priority"),
    status: normalizeWorkOrderStatus(formData.get("status")),
    assignedTo: formData.get("assignedTo").trim(),
    dueDate: formData.get("dueDate"),
    description: formData.get("description").trim(),
    serviceDate: "",
    meterReading: "",
    hourlyRate: getTechnicianRate(formData.get("assignedTo").trim()),
    findings: "",
    workPerformed: "",
    partsUsed: "",
    parts: [],
    recommendations: "",
    serviceChecklist: {
      brakeLfMm: "",
      brakeLfStatus: "",
      brakeRfMm: "",
      brakeRfStatus: "",
      brakeLrMm: "",
      brakeLrStatus: "",
      brakeRrMm: "",
      brakeRrStatus: "",
      brakeNotes: "",
      tireLf32: "",
      tireLfStatus: "",
      tireRf32: "",
      tireRfStatus: "",
      tireLr32: "",
      tireLrStatus: "",
      tireRr32: "",
      tireRrStatus: "",
      tireNotes: "",
      fluidEngineOil: "",
      fluidEngineOilAdded: false,
      fluidEngineOilAmount: "",
      fluidCoolant: "",
      fluidCoolantAdded: false,
      fluidCoolantAmount: "",
      fluidBrake: "",
      fluidBrakeAdded: false,
      fluidBrakeAmount: "",
      fluidTransmission: "",
      fluidTransmissionAdded: false,
      fluidTransmissionAmount: "",
      fluidPowerSteering: "",
      fluidPowerSteeringAdded: false,
      fluidPowerSteeringAmount: "",
      fluidHydraulic: "",
      fluidHydraulicAdded: false,
      fluidHydraulicAmount: "",
      fluidWasher: "",
      fluidWasherAdded: false,
      fluidWasherAmount: "",
      fluidDef: "",
      fluidDefAdded: false,
      fluidDefAmount: "",
      fluidNotes: "",
      lightHeadlights: "",
      lightBrakeLights: "",
      lightTurnSignals: "",
      lightMarkers: "",
      lightReverse: "",
      lightInterior: "",
      lightingNotes: "",
      bodyGlass: "",
      bodyMirrors: "",
      bodyDoors: "",
      bodyPanels: "",
      bodyExterior: "",
      bodySeatsBelts: "",
      bodyNotes: "",
    },
    timeEntries: [],
    timerStartedAt: "",
    toolboxActive: formData.get("toolboxActive") === "on",
    createdAt: new Date().toISOString(),
  };

  state.workOrders.unshift(workOrder);
  currentWorkOrderDetailId = workOrder.id;
  workOrderPartDrafts = [];

  workOrderForm.reset();
  workOrderAssetTypeSelect.value = "";
  populateWorkOrderAssetOptions();
  render();
  setActivePage("work-order-detail");
}

function handleComplianceSubmit(event) {
  event.preventDefault();
  const formData = new FormData(complianceForm);
  state.complianceRecords.unshift({
    id: createId(),
    assetId: formData.get("assetId"),
    requirementType: formData.get("requirementType"),
    provider: formData.get("provider").trim(),
    reference: formData.get("reference").trim(),
    effectiveDate: formData.get("effectiveDate"),
    expirationDate: formData.get("expirationDate"),
    notes: formData.get("notes").trim(),
  });

  complianceForm.reset();
  render();
  setActivePage("compliance");
}

async function handleDocumentSubmit(event) {
  event.preventDefault();
  const formData = new FormData(documentForm);
  const file = formData.get("file");
  const uploadedFile = await saveAttachmentFile(file, "documents");

  state.documents.unshift({
    id: createId(),
    assetId: formData.get("assetId"),
    title: formData.get("title").trim(),
    category: formData.get("category"),
    notes: formData.get("notes").trim(),
    fileName: uploadedFile.fileName,
    fileDataUrl: uploadedFile.fileDataUrl,
    fileUrl: uploadedFile.fileUrl,
    fileStoragePath: uploadedFile.fileStoragePath,
    createdAt: new Date().toISOString(),
  });

  documentForm.reset();
  render();
  setActivePage("documents");
}

function renderCollection(collection, itemRenderer) {
  if (!collection.length) {
    return document.querySelector("#emptyStateTemplate").innerHTML;
  }

  return collection.map(itemRenderer).join("");
}

function getAssetName(assetId) {
  return state.assets.find((asset) => asset.id === assetId)?.name || "Unknown asset";
}

function getComplianceAlerts() {
  return state.complianceRecords.filter((record) => getDaysRemaining(record.expirationDate) <= 30);
}

function getNextExpirationLabel() {
  if (!state.complianceRecords.length) {
    return "No compliance records";
  }

  const sorted = [...state.complianceRecords]
    .filter((record) => record.expirationDate)
    .sort((a, b) => a.expirationDate.localeCompare(b.expirationDate));

  if (!sorted.length) {
    return "No dates set";
  }

  return `${sorted[0].requirementType} on ${formatDate(sorted[0].expirationDate)}`;
}

function getAlertState(expirationDate) {
  if (!expirationDate) {
    return { label: "No date", className: "" };
  }

  const daysRemaining = getDaysRemaining(expirationDate);

  if (daysRemaining < 0) {
    return { label: "Expired", className: "alert" };
  }

  if (daysRemaining <= 30) {
    return { label: `Due in ${daysRemaining} day${daysRemaining === 1 ? "" : "s"}`, className: "alert" };
  }

  return { label: "Current", className: "" };
}

function getDaysRemaining(dateString) {
  if (!dateString) {
    return Number.POSITIVE_INFINITY;
  }

  const target = new Date(`${dateString}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((target - today) / 86400000);
}

function formatDate(dateString) {
  if (!dateString) {
    return "Not set";
  }

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function buildAssetDisplayName(asset) {
  if (asset.type === "Vehicle") {
    return asset.name || [asset.year, asset.make, asset.model].filter(Boolean).join(" ") || "Vehicle";
  }

  if (asset.type === "Trailer") {
    return [asset.year, asset.make, asset.model].filter(Boolean).join(" ") || asset.trailerNumber || "Trailer";
  }

  return [asset.year, asset.make, asset.model, asset.modelNumber].filter(Boolean).join(" ") || asset.equipmentNumber || "Equipment";
}

function buildAssetImportKey(asset) {
  return `${asset.type}::${String(asset.unitNumber || "").trim().toUpperCase()}::${String(asset.serial || "").trim().toUpperCase()}`;
}

function buildAssetSummaryMeta(asset) {
  const items = asset.type === "Vehicle"
    ? [
        ["Asset #", asset.assetNumber || "Not set"],
        ["Category", asset.category || "Not set"],
        ["Year", asset.year || "N/A"],
        ["Plate", asset.licensePlate || "Not set"],
        ["VIN", asset.vin || "Not set"],
      ]
    : asset.type === "Trailer"
      ? [
          ["Trailer #", asset.trailerNumber || "Not set"],
          ["Category", asset.category || "Not set"],
          ["Year", asset.year || "N/A"],
          ["Plate", asset.licensePlate || "Not set"],
          ["VIN", asset.vin || "Not set"],
        ]
      : [
          ["Equipment #", asset.equipmentNumber || "Not set"],
          ["Category", asset.category || "Not set"],
          ["Year", asset.year || "N/A"],
          ["VIN / Serial", asset.vinSerial || "Not set"],
          ["EIN", asset.ein || "Not set"],
        ];

  return items.map(([label, value]) => `
    <div class="asset-meta-chip">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join("");
}

function buildAssetSecondaryDetails(asset) {
  const rows = [];

  if (asset.location) {
    rows.push(["Assigned", asset.location]);
  }

  if (asset.type === "Trailer" && asset.gvwr) {
    rows.push(["GVWR", asset.gvwr]);
  }

  if (asset.type === "Equipment" && asset.modelNumber) {
    rows.push(["Model #", asset.modelNumber]);
  }

  if (asset.type === "Equipment" && asset.engineSerial) {
    rows.push(["Engine Serial #", asset.engineSerial]);
  }

  if (asset.notes) {
    rows.push(["Notes", asset.notes]);
  }

  if (!rows.length) {
    return "";
  }

  return `
    <div class="asset-card-secondary">
      ${rows.map(([label, value]) => `
        <div class="asset-secondary-row">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function buildAssetDetailFields(asset) {
  const fields = asset.type === "Vehicle"
    ? [
        ["Asset #", asset.assetNumber],
        ["Name", asset.name],
        ["Year", asset.year],
        ["Make", asset.make],
        ["Model", asset.model],
        ["License Plate", asset.licensePlate],
        ["VIN", asset.vin],
        ["Category", asset.category],
      ]
    : asset.type === "Trailer"
      ? [
          ["Trailer #", asset.trailerNumber],
          ["Location", asset.location],
          ["Year", asset.year],
          ["Make", asset.make],
          ["Model", asset.model],
          ["GVWR", asset.gvwr],
          ["License Plate", asset.licensePlate],
          ["VIN", asset.vin],
          ["Category", asset.category],
        ]
      : [
          ["Equipment #", asset.equipmentNumber],
          ["Location", asset.location],
          ["Year", asset.year],
          ["Make", asset.make],
          ["Model", asset.model],
          ["Model #", asset.modelNumber],
          ["License Plate", asset.licensePlate],
          ["VIN / Serial", asset.vinSerial],
          ["Engine Serial #", asset.engineSerial],
          ["EIN", asset.ein],
          ["Category", asset.category],
        ];

  return fields.map(([label, value]) => `
    <div class="detail-item">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value || "Not set")}</strong>
    </div>
  `).join("");
}

function buildInspectionStatusItems(order) {
  const checklist = order.serviceChecklist || {};
  const statuses = [
    buildIndicatorItem("LF Brake", checklist.brakeLfMm, "mm"),
    buildIndicatorItem("RF Brake", checklist.brakeRfMm, "mm"),
    buildIndicatorItem("LR Brake", checklist.brakeLrMm, "mm"),
    buildIndicatorItem("RR Brake", checklist.brakeRrMm, "mm"),
    buildIndicatorItem("LF Tire", checklist.tireLf32, "/32"),
    buildIndicatorItem("RF Tire", checklist.tireRf32, "/32"),
    buildIndicatorItem("LR Tire", checklist.tireLr32, "/32"),
    buildIndicatorItem("RR Tire", checklist.tireRr32, "/32"),
    buildSimpleItem("Engine Oil", formatFluidDisplay(checklist.fluidEngineOil, checklist.fluidEngineOilAdded, checklist.fluidEngineOilAmount)),
    buildSimpleItem("Coolant", formatFluidDisplay(checklist.fluidCoolant, checklist.fluidCoolantAdded, checklist.fluidCoolantAmount)),
    buildSimpleItem("Brake Fluid", formatFluidDisplay(checklist.fluidBrake, checklist.fluidBrakeAdded, checklist.fluidBrakeAmount)),
    buildSimpleItem("Headlights", checklist.lightHeadlights),
    buildSimpleItem("Brake Lights", checklist.lightBrakeLights),
    buildSimpleItem("Windshield / Glass", checklist.bodyGlass),
    buildSimpleItem("Doors / Latches", checklist.bodyDoors),
  ];

  return statuses.join("");
}

function buildSimpleItem(label, value) {
  return `
    <div class="detail-item">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value || "Not checked")}</strong>
    </div>
  `;
}

function buildIndicatorItem(label, value, unit) {
  const measured = value ? `${escapeHtml(value)}${escapeHtml(unit)}` : "";
  const status = getWearColor(value);
  const icon = status ? `<span class="status-dot ${status.toLowerCase()}"></span>` : "";
  const statusText = status || "Not checked";
  return `
    <div class="detail-item">
      <span>${escapeHtml(label)}</span>
      <strong>${icon}${measured ? `${measured} ` : ""}${statusText}</strong>
    </div>
  `;
}

function formatMeasuredStatus(value, unit, status) {
  const measured = value ? `${value}${unit}` : "";
  if (measured && status) {
    return `${measured} - ${status}`;
  }
  return measured || status || "";
}

function formatFluidDisplay(level, added, amount) {
  if (!level) {
    return "";
  }

  if (added) {
    return `${level} - Added ${amount || "fluid"}`;
  }

  return level;
}

function getWearColor(value) {
  const numeric = Number.parseInt(value, 10);
  if (Number.isNaN(numeric)) {
    return "";
  }
  if (numeric >= 8) {
    return "Green";
  }
  if (numeric >= 4) {
    return "Yellow";
  }
  return "Red";
}

function openWorkOrderDetail(workOrderId) {
  currentWorkOrderDetailId = workOrderId;
  workOrderPartDrafts = [];
  editingWorkOrderTimeEntryId = null;
  editingWorkOrderPartId = null;
  setActivePage("work-order-detail");
}

function renderWorkOrderDetail() {
  const order = state.workOrders.find((item) => item.id === currentWorkOrderDetailId);

  if (!order) {
    workOrderPartDrafts = [];
    editingWorkOrderTimeEntryId = null;
    editingWorkOrderPartId = null;
    workOrderDetailTitle.textContent = "Work Order Detail";
    if (workOrderStatusActions) workOrderStatusActions.innerHTML = "";
    workOrderDetailSummary.innerHTML = document.querySelector("#emptyStateTemplate").innerHTML;
    if (printWorkOrderSheet) printWorkOrderSheet.innerHTML = "";
    workOrderTimeEntryList.innerHTML = document.querySelector("#emptyStateTemplate").innerHTML;
    workOrderPartList.innerHTML = document.querySelector("#emptyStateTemplate").innerHTML;
    if (workOrderPartComposer) workOrderPartComposer.innerHTML = "";
    workOrderDetailForm.reset();
    if (manualTimeEntryForm) manualTimeEntryForm.reset();
    syncWorkOrderTimerDisplay(null);
    laborCostDisplay.value = "";
    startTimerButton.disabled = true;
    stopTimerButton.disabled = true;
    return;
  }

  const asset = state.assets.find((item) => item.id === order.assetId);
  const totalHours = calculateWorkOrderHours(order);
  const laborCost = calculateWorkOrderLaborCost(order);
  const partsSubtotal = calculateWorkOrderPartsSubtotal(order);
  const partsTax = calculateWorkOrderPartsTax(order);
  const totalCost = calculateWorkOrderTotalCost(order);
  const statusLabel = getWorkOrderStatusLabel(order.status);

  workOrderDetailTitle.textContent = order.title || "Work Order Detail";
  if (workOrderStatusActions) {
    workOrderStatusActions.innerHTML = WORK_ORDER_STATUSES.map((status) => `
      <button
        type="button"
        class="status-chip ${getWorkOrderStatusClass(status)} ${status === statusLabel ? "active" : ""}"
        data-work-order-status="${escapeHtml(status)}"
      >
        ${escapeHtml(status)}
      </button>
    `).join("");

    workOrderStatusActions.querySelectorAll("[data-work-order-status]").forEach((button) => {
      button.addEventListener("click", () => {
        order.status = normalizeWorkOrderStatus(button.dataset.workOrderStatus);
        render();
        renderWorkOrderDetail();
      });
    });
  }
  workOrderDetailSummary.innerHTML = `
    <article class="record-card">
      <header>
        <div>
          <h4>${escapeHtml(order.title)}</h4>
          <div class="meta">
            <span>${escapeHtml(getWorkOrderNumber(order))}</span>
            <span>${escapeHtml(getAssetName(order.assetId))}</span>
            <span>Assigned: ${escapeHtml(order.assignedTo || "Unassigned")}</span>
            <span>Status: ${escapeHtml(statusLabel)}</span>
            <span>Priority: ${escapeHtml(order.priority)}</span>
          </div>
        </div>
        <span class="pill ${getWorkOrderStatusClass(order.status)}">${escapeHtml(statusLabel)}</span>
      </header>
      <p>${escapeHtml(order.description || "No complaint entered.")}</p>
      <div class="meta">
        <span>Asset #: ${escapeHtml(asset ? getAssetNumberLabel(asset) : "Not set")}</span>
        <span>Total Hours: ${escapeHtml(totalHours.toFixed(2))}</span>
        <span>Labor Cost: ${escapeHtml(formatCurrency(laborCost))}</span>
        <span>Parts Total: ${escapeHtml(formatCurrency(partsSubtotal))}</span>
        <span>Parts Tax (9%): ${escapeHtml(formatCurrency(partsTax))}</span>
        <span>Total Cost: ${escapeHtml(formatCurrency(totalCost))}</span>
        <span>${order.timerStartedAt ? "Timer running" : "Timer stopped"}</span>
      </div>
    </article>
  `;
  renderPrintWorkOrderSheet(order, asset);

  startTimerButton.disabled = Boolean(order.timerStartedAt);
  stopTimerButton.disabled = !order.timerStartedAt;
  syncWorkOrderTimerDisplay(order);

  workOrderTimeEntryList.innerHTML = renderCollection(order.timeEntries || [], (entry) => `
    <article class="record-card">
      ${editingWorkOrderTimeEntryId === entry.id ? `
        <form class="inline-edit-form work-order-time-edit-form" data-time-entry-id="${entry.id}">
          <div class="detail-grid">
            <label><span>Date</span><input type="date" name="entryDate" value="${escapeHtml(entry.entryDate || "")}" required></label>
            <label><span>Hours</span><input name="hours" value="${escapeHtml(entry.hours || "")}" required></label>
            <label class="full-span"><span>Note</span><input name="note" value="${escapeHtml(entry.note || "")}"></label>
          </div>
          <div class="action-row form-actions">
            <button type="submit" class="button-primary">Save Changes</button>
            <button type="button" class="button-secondary" data-time-entry-cancel="${entry.id}">Cancel</button>
            <button type="button" class="button-danger" data-time-entry-delete="${entry.id}">Delete</button>
          </div>
        </form>
      ` : `
        <h4>${escapeHtml(entry.hours)} hours</h4>
        <div class="meta">
          <span>${formatDate(entry.entryDate)}</span>
          <span>${escapeHtml(entry.source || "Manual")}</span>
          <span>${escapeHtml(entry.technicianName || "Unassigned")}</span>
          <span>Rate: ${escapeHtml(formatCurrencyValue(entry.hourlyRate, "Not set"))}</span>
        </div>
        <p>${escapeHtml(entry.note || "No note entered.")}</p>
        <div class="action-row">
          <button type="button" class="button-secondary" data-time-entry-edit="${entry.id}">Edit</button>
          <button type="button" class="button-danger" data-time-entry-delete="${entry.id}">Delete</button>
        </div>
      `}
    </article>
  `);

  document.querySelectorAll("[data-time-entry-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      editingWorkOrderTimeEntryId = button.dataset.timeEntryEdit;
      renderWorkOrderDetail();
    });
  });

  document.querySelectorAll("[data-time-entry-cancel]").forEach((button) => {
    button.addEventListener("click", () => {
      editingWorkOrderTimeEntryId = null;
      renderWorkOrderDetail();
    });
  });

  document.querySelectorAll("[data-time-entry-delete]").forEach((button) => {
    button.addEventListener("click", () => handleWorkOrderTimeEntryDelete(button.dataset.timeEntryDelete));
  });

  document.querySelectorAll(".work-order-time-edit-form").forEach((form) => {
    form.addEventListener("submit", handleWorkOrderTimeEntryEditSubmit);
  });

  populateWorkOrderDetailForm(order, laborCost);
}

function populateWorkOrderDetailForm(order, laborCost) {
  if (workOrderAutoSaveTimeoutId) {
    window.clearTimeout(workOrderAutoSaveTimeoutId);
    workOrderAutoSaveTimeoutId = null;
  }
  setWorkOrderAutoSaveStatus("Saved");
  workOrderDetailForm.elements.serviceDate.value = order.serviceDate || "";
  workOrderDetailForm.elements.meterReading.value = order.meterReading || "";
  workOrderDetailForm.elements.hourlyRate.value = order.hourlyRate || "";
  laborCostDisplay.value = formatCurrency(laborCost);
  if (manualTimeEntryForm?.elements.entryDate) {
    manualTimeEntryForm.elements.entryDate.value = manualTimeEntryForm.elements.entryDate.value || new Date().toISOString().slice(0, 10);
  }
  if (workOrderDetailTechnicianSelect) {
    workOrderDetailTechnicianSelect.value = order.assignedTo || "";
  }
  if (workOrderDetailTechnicianRate) {
    workOrderDetailTechnicianRate.value = order.hourlyRate || "";
  }

  const checklist = order.serviceChecklist || {};
  Object.entries(checklist).forEach(([key, value]) => {
    if (workOrderDetailForm.elements[key]) {
      if (workOrderDetailForm.elements[key].type === "checkbox") {
        workOrderDetailForm.elements[key].checked = Boolean(value);
      } else {
        workOrderDetailForm.elements[key].value = value || "";
      }
    }
  });

  workOrderDetailForm.elements.findings.value = order.findings || "";
  workOrderDetailForm.elements.workPerformed.value = order.workPerformed || "";
  workOrderDetailForm.elements.recommendations.value = order.recommendations || "";
  updateFluidFieldVisibility();
  updateWearSelectStyles();
  updateStatusSelectStyles();
  renderWorkOrderParts(order);
  renderWorkOrderPartComposer();
}

function handleWorkOrderDetailSubmit(event) {
  event.preventDefault();
  if (workOrderAutoSaveTimeoutId) {
    window.clearTimeout(workOrderAutoSaveTimeoutId);
    workOrderAutoSaveTimeoutId = null;
  }
  saveWorkOrderDetailFromForm();
  setWorkOrderAutoSaveStatus("Saved");
}

function handleWorkOrderDetailFormChange() {
  updateFluidFieldVisibility();
  updateWearSelectStyles();
  updateStatusSelectStyles();
  scheduleWorkOrderDetailAutoSave();
}

function scheduleWorkOrderDetailAutoSave() {
  const order = state.workOrders.find((item) => item.id === currentWorkOrderDetailId);
  if (!order) {
    return;
  }

  if (workOrderAutoSaveTimeoutId) {
    window.clearTimeout(workOrderAutoSaveTimeoutId);
  }

  setWorkOrderAutoSaveStatus("Saving...");
  workOrderAutoSaveTimeoutId = window.setTimeout(() => {
    workOrderAutoSaveTimeoutId = null;
    saveWorkOrderDetailFromForm();
    setWorkOrderAutoSaveStatus("Saved");
  }, 650);
}

function saveWorkOrderDetailFromForm() {
  const order = state.workOrders.find((item) => item.id === currentWorkOrderDetailId);
  if (!order || !workOrderDetailForm) {
    return;
  }

  const formData = new FormData(workOrderDetailForm);
  order.serviceDate = formData.get("serviceDate");
  order.meterReading = formData.get("meterReading").trim();
  order.findings = formData.get("findings").trim();
  order.workPerformed = formData.get("workPerformed").trim();
  order.partsUsed = buildWorkOrderPartsText(order);
  order.recommendations = formData.get("recommendations").trim();
  order.serviceChecklist = {
    brakeLfMm: formData.get("brakeLfMm").trim(),
    brakeLfStatus: formData.get("brakeLfStatus"),
    brakeRfMm: formData.get("brakeRfMm").trim(),
    brakeRfStatus: formData.get("brakeRfStatus"),
    brakeLrMm: formData.get("brakeLrMm").trim(),
    brakeLrStatus: formData.get("brakeLrStatus"),
    brakeRrMm: formData.get("brakeRrMm").trim(),
    brakeRrStatus: formData.get("brakeRrStatus"),
    brakeNotes: formData.get("brakeNotes").trim(),
    tireLf32: formData.get("tireLf32").trim(),
    tireLfStatus: formData.get("tireLfStatus"),
    tireRf32: formData.get("tireRf32").trim(),
    tireRfStatus: formData.get("tireRfStatus"),
    tireLr32: formData.get("tireLr32").trim(),
    tireLrStatus: formData.get("tireLrStatus"),
    tireRr32: formData.get("tireRr32").trim(),
    tireRrStatus: formData.get("tireRrStatus"),
    tireNotes: formData.get("tireNotes").trim(),
    fluidEngineOil: formData.get("fluidEngineOil"),
    fluidEngineOilAdded: formData.get("fluidEngineOilAdded") === "yes",
    fluidEngineOilAmount: formData.get("fluidEngineOilAmount").trim(),
    fluidCoolant: formData.get("fluidCoolant"),
    fluidCoolantAdded: formData.get("fluidCoolantAdded") === "yes",
    fluidCoolantAmount: formData.get("fluidCoolantAmount").trim(),
    fluidBrake: formData.get("fluidBrake"),
    fluidBrakeAdded: formData.get("fluidBrakeAdded") === "yes",
    fluidBrakeAmount: formData.get("fluidBrakeAmount").trim(),
    fluidTransmission: formData.get("fluidTransmission"),
    fluidTransmissionAdded: formData.get("fluidTransmissionAdded") === "yes",
    fluidTransmissionAmount: formData.get("fluidTransmissionAmount").trim(),
    fluidPowerSteering: formData.get("fluidPowerSteering"),
    fluidPowerSteeringAdded: formData.get("fluidPowerSteeringAdded") === "yes",
    fluidPowerSteeringAmount: formData.get("fluidPowerSteeringAmount").trim(),
    fluidHydraulic: formData.get("fluidHydraulic"),
    fluidHydraulicAdded: formData.get("fluidHydraulicAdded") === "yes",
    fluidHydraulicAmount: formData.get("fluidHydraulicAmount").trim(),
    fluidWasher: formData.get("fluidWasher"),
    fluidWasherAdded: formData.get("fluidWasherAdded") === "yes",
    fluidWasherAmount: formData.get("fluidWasherAmount").trim(),
    fluidDef: formData.get("fluidDef"),
    fluidDefAdded: formData.get("fluidDefAdded") === "yes",
    fluidDefAmount: formData.get("fluidDefAmount").trim(),
    fluidNotes: formData.get("fluidNotes").trim(),
    lightHeadlights: formData.get("lightHeadlights"),
    lightBrakeLights: formData.get("lightBrakeLights"),
    lightTurnSignals: formData.get("lightTurnSignals"),
    lightMarkers: formData.get("lightMarkers"),
    lightReverse: formData.get("lightReverse"),
    lightInterior: formData.get("lightInterior"),
    lightingNotes: formData.get("lightingNotes").trim(),
    bodyGlass: formData.get("bodyGlass"),
    bodyMirrors: formData.get("bodyMirrors"),
    bodyDoors: formData.get("bodyDoors"),
    bodyPanels: formData.get("bodyPanels"),
    bodyExterior: formData.get("bodyExterior"),
    bodySeatsBelts: formData.get("bodySeatsBelts"),
    bodyNotes: formData.get("bodyNotes").trim(),
  };

  render();
  renderWorkOrderDetail();
}

function updateFluidFieldVisibility() {
  document.querySelectorAll("[data-fluid-amount-for]").forEach((wrapper) => {
    const checkboxName = wrapper.dataset.fluidAmountFor;
    const checkbox = workOrderDetailForm.elements[checkboxName];
    const shouldShow = Boolean(checkbox?.checked);
    wrapper.classList.toggle("fluid-amount-hidden", !shouldShow);
    const input = wrapper.querySelector("input");
    if (!shouldShow && input) {
      input.value = "";
    }
  });
}

function updateWearSelectStyles() {
  document.querySelectorAll("[data-wear-select]").forEach((select) => {
    const color = getWearColor(select.value);
    select.dataset.color = color.toLowerCase();
  });
}

function updateStatusSelectStyles() {
  document.querySelectorAll("[data-status-select]").forEach((select) => {
    select.dataset.color = getStatusColor(select.value);
  });
}

function getStatusColor(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (normalized === "full" || normalized === "good") {
    return "green";
  }
  if (normalized === "moderate") {
    return "yellow";
  }
  if (normalized === "low" || normalized === "bad") {
    return "red";
  }
  return "";
}

function handleManualTimeEntrySubmit(event) {
  event.preventDefault();
  const order = state.workOrders.find((item) => item.id === currentWorkOrderDetailId);
  if (!order) {
    return;
  }

  const formData = new FormData(manualTimeEntryForm);
  const technicianName = formData.get("technicianName").trim();
  const hourlyRate = getTechnicianRate(technicianName);
  order.assignedTo = technicianName;
  order.hourlyRate = hourlyRate;
  order.timeEntries = order.timeEntries || [];
  order.timeEntries.push({
    id: createId(),
    entryDate: formData.get("entryDate"),
    hours: formData.get("hours").trim(),
    note: formData.get("note").trim(),
    source: "Manual",
    technicianName,
    hourlyRate,
  });

  if (manualTimeEntryForm.elements.hours) manualTimeEntryForm.elements.hours.value = "";
  if (manualTimeEntryForm.elements.note) manualTimeEntryForm.elements.note.value = "";
  render();
  renderWorkOrderDetail();
}

function handleManualTimeEntryFormChange(event) {
  if (event.target.name !== "technicianName") {
    return;
  }

  const technicianName = event.target.value.trim();
  const hourlyRate = getTechnicianRate(technicianName);
  if (workOrderDetailTechnicianRate) {
    workOrderDetailTechnicianRate.value = hourlyRate;
  }

  const order = state.workOrders.find((item) => item.id === currentWorkOrderDetailId);
  if (order) {
    order.assignedTo = technicianName;
    order.hourlyRate = hourlyRate;
    if (workOrderDetailForm?.elements.hourlyRate) {
      workOrderDetailForm.elements.hourlyRate.value = hourlyRate;
    }
    render();
    renderWorkOrderDetail();
  }
}

function handleWorkOrderTimeEntryEditSubmit(event) {
  event.preventDefault();
  const order = state.workOrders.find((item) => item.id === currentWorkOrderDetailId);
  const entryId = event.currentTarget.dataset.timeEntryId;
  const entry = order?.timeEntries?.find((item) => item.id === entryId);
  if (!entry) {
    return;
  }

  const formData = new FormData(event.currentTarget);
  entry.entryDate = formData.get("entryDate");
  entry.hours = formData.get("hours").trim();
  entry.note = formData.get("note").trim();

  editingWorkOrderTimeEntryId = null;
  render();
  renderWorkOrderDetail();
}

function handleWorkOrderTimeEntryDelete(entryId) {
  const order = state.workOrders.find((item) => item.id === currentWorkOrderDetailId);
  const entry = order?.timeEntries?.find((item) => item.id === entryId);
  if (!order || !entry) {
    return;
  }

  if (!window.confirm("Delete this time entry?")) {
    return;
  }

  order.timeEntries = (order.timeEntries || []).filter((item) => item.id !== entryId);
  editingWorkOrderTimeEntryId = null;
  render();
  renderWorkOrderDetail();
}

function handleAddWorkOrderPartDraft() {
  const order = state.workOrders.find((item) => item.id === currentWorkOrderDetailId);
  if (!order) {
    return;
  }

  workOrderPartDrafts.push({
    id: createId(),
    inventoryItemId: "",
    quantity: "1",
    isCreatingNew: false,
    newItemName: "",
    newPartNumber: "",
    newVendor: "",
    newUom: "Ea",
    newPrice: "",
  });

  renderWorkOrderPartComposer();
}

function handleWorkOrderPartComposerChange(event) {
  const row = event.target.closest("[data-part-draft-id]");
  if (!row) {
    return;
  }

  const draft = workOrderPartDrafts.find((item) => item.id === row.dataset.partDraftId);
  if (!draft) {
    return;
  }

  const field = event.target.dataset.partDraftField;
  if (!field) {
    return;
  }

  draft[field] = event.target.value;

  if (field === "inventoryItemId") {
    draft.isCreatingNew = draft.inventoryItemId === "__new__";
    if (draft.isCreatingNew) {
      draft.newUom = sanitizeInventoryUom(draft.newUom) || "Ea";
    }
    renderWorkOrderPartComposer();
  }
}

function handleWorkOrderPartComposerClick(event) {
  const button = event.target.closest("[data-part-draft-action]");
  if (!button) {
    return;
  }

  const row = button.closest("[data-part-draft-id]");
  if (!row) {
    return;
  }

  const draftId = row.dataset.partDraftId;
  if (button.dataset.partDraftAction === "remove") {
    workOrderPartDrafts = workOrderPartDrafts.filter((item) => item.id !== draftId);
    renderWorkOrderPartComposer();
    return;
  }

  if (button.dataset.partDraftAction === "save") {
    saveWorkOrderPartDraft(draftId);
  }
}

function saveWorkOrderPartDraft(draftId) {
  const order = state.workOrders.find((item) => item.id === currentWorkOrderDetailId);
  const draft = workOrderPartDrafts.find((item) => item.id === draftId);
  if (!order || !draft) {
    return;
  }

  let inventoryItem = state.inventoryItems.find((item) => item.id === draft.inventoryItemId);
  if (draft.isCreatingNew) {
    const itemName = String(draft.newItemName || "").trim();
    const uom = sanitizeInventoryUom(draft.newUom) || "Ea";

    if (!itemName) {
      return;
    }

    inventoryItem = {
      id: createId(),
      name: itemName,
      partNumber: String(draft.newPartNumber || "").trim(),
      vendor: String(draft.newVendor || "").trim(),
      uom,
      price: normalizeCurrencyInput(draft.newPrice),
    };
    state.inventoryItems.unshift(inventoryItem);
  }

  if (!inventoryItem) {
    return;
  }

  order.parts = order.parts || [];
  order.parts.push({
    id: createId(),
    inventoryItemId: inventoryItem.id,
    name: inventoryItem.name,
    partNumber: inventoryItem.partNumber,
    vendor: inventoryItem.vendor,
    uom: inventoryItem.uom,
    price: inventoryItem.price,
    quantity: String(draft.quantity || "1").trim() || "1",
  });
  order.partsUsed = buildWorkOrderPartsText(order);
  workOrderPartDrafts = workOrderPartDrafts.filter((item) => item.id !== draftId);
  render();
  renderWorkOrderDetail();
}

function renderWorkOrderPartComposer() {
  if (!workOrderPartComposer) {
    return;
  }

  if (!workOrderPartDrafts.length) {
    workOrderPartComposer.innerHTML = "";
    return;
  }

  workOrderPartComposer.innerHTML = workOrderPartDrafts.map((draft) => `
    <article class="record-card part-draft-card" data-part-draft-id="${draft.id}">
      <header>
        <div>
          <h4>New Part Line</h4>
          <div class="asset-card-subtitle">${draft.isCreatingNew ? "Create and save a new inventory item" : "Select an existing inventory item and quantity"}</div>
        </div>
      </header>
      <div class="part-draft-grid">
        <label class="full-span">
          Part Item
          <select data-part-draft-field="inventoryItemId">
            <option value="">Select part</option>
            ${state.inventoryItems.map((item) => `
              <option value="${item.id}" ${draft.inventoryItemId === item.id ? "selected" : ""}>
                ${escapeHtml(item.name)}${item.partNumber ? ` (${escapeHtml(item.partNumber)})` : ""}
              </option>
            `).join("")}
            <option value="__new__" ${draft.isCreatingNew ? "selected" : ""}>Create New Item</option>
          </select>
        </label>
        <label>
          Qty
          <input
            type="number"
            min="1"
            step="1"
            value="${escapeHtml(draft.quantity || "1")}"
            data-part-draft-field="quantity"
          >
        </label>
        ${draft.isCreatingNew ? `
          <label>
            Item Name
            <input value="${escapeHtml(draft.newItemName || "")}" data-part-draft-field="newItemName" placeholder="Brake Cleaner">
          </label>
          <label>
            Part Number
            <input value="${escapeHtml(draft.newPartNumber || "")}" data-part-draft-field="newPartNumber" placeholder="BC-101">
          </label>
          <label>
            Vendor
            <input value="${escapeHtml(draft.newVendor || "")}" data-part-draft-field="newVendor" placeholder="NAPA">
          </label>
          <label>
            UOM
            <select data-part-draft-field="newUom">
              ${INVENTORY_UOM_OPTIONS.map((option) => `
                <option value="${option}" ${sanitizeInventoryUom(draft.newUom) === option ? "selected" : ""}>${option}</option>
              `).join("")}
            </select>
          </label>
          <label>
            Price
            <input value="${escapeHtml(formatCurrencyValue(draft.newPrice))}" data-part-draft-field="newPrice" placeholder="$0.00">
          </label>
        ` : ""}
      </div>
      <div class="action-row form-actions">
        <button type="button" class="button-primary" data-part-draft-action="save">Add Line Item</button>
        <button type="button" class="button-secondary" data-part-draft-action="remove">Remove</button>
      </div>
    </article>
  `).join("");
}

function renderWorkOrderParts(order) {
  workOrderPartList.innerHTML = renderCollection(order.parts || [], (part) => `
    <article class="record-card">
      ${editingWorkOrderPartId === part.id ? `
        <form class="inline-edit-form work-order-part-edit-form" data-work-order-part-id="${part.id}">
          <div class="detail-grid">
            <label><span>Item Name</span><input name="name" value="${escapeHtml(part.name || "")}" required></label>
            <label><span>Qty</span><input name="quantity" type="number" min="1" step="1" value="${escapeHtml(part.quantity || "1")}" required></label>
            <label><span>Part Number</span><input name="partNumber" value="${escapeHtml(part.partNumber || "")}"></label>
            <label><span>Vendor</span><input name="vendor" value="${escapeHtml(part.vendor || "")}"></label>
            <label>
              <span>UOM</span>
              <select name="uom" required>
                ${buildUomOptions(part.uom)}
              </select>
            </label>
            <label><span>Price</span><input name="price" value="${escapeHtml(formatCurrencyValue(part.price))}"></label>
          </div>
          <div class="action-row form-actions">
            <button type="submit" class="button-primary">Save Changes</button>
            <button type="button" class="button-secondary" data-work-order-part-cancel="${part.id}">Cancel</button>
            <button type="button" class="button-danger" data-work-order-part-delete="${part.id}">Delete</button>
          </div>
        </form>
      ` : `
        <header>
          <div>
            <h4>${escapeHtml(part.name)}</h4>
            <div class="asset-card-subtitle">Work Order Part</div>
          </div>
          <span class="pill">${escapeHtml(formatCurrency(calculatePartLineTotal(part)))}</span>
        </header>
        <div class="asset-card-grid">${buildWorkOrderPartSummaryMeta(part)}</div>
        ${buildWorkOrderPartSecondaryDetails(part)}
        <div class="action-row">
          <button type="button" class="button-secondary" data-work-order-part-edit="${part.id}">Edit</button>
          <button type="button" class="button-danger" data-work-order-part-delete="${part.id}">Delete</button>
        </div>
      `}
    </article>
  `);

  document.querySelectorAll("[data-work-order-part-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      editingWorkOrderPartId = button.dataset.workOrderPartEdit;
      renderWorkOrderDetail();
    });
  });

  document.querySelectorAll("[data-work-order-part-cancel]").forEach((button) => {
    button.addEventListener("click", () => {
      editingWorkOrderPartId = null;
      renderWorkOrderDetail();
    });
  });

  document.querySelectorAll("[data-work-order-part-delete]").forEach((button) => {
    button.addEventListener("click", () => handleWorkOrderPartDelete(button.dataset.workOrderPartDelete));
  });

  document.querySelectorAll(".work-order-part-edit-form").forEach((form) => {
    form.addEventListener("submit", handleWorkOrderPartEditSubmit);
  });
}

function buildInventorySummaryMeta(item) {
  const fields = [
    ["Part #", item.partNumber || "Not set"],
    ["Vendor", item.vendor || "Not set"],
    ["UOM", item.uom || "Not set"],
    ["Price", formatCurrencyValue(item.price, "$0.00")],
  ];

  return fields.map(([label, value]) => `
    <div class="asset-meta-chip">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join("");
}

function buildInventorySecondaryDetails(item) {
  const rows = [];

  if (item.vendor) {
    rows.push(["Preferred Vendor", item.vendor]);
  }

  if (item.partNumber) {
    rows.push(["Reference", item.partNumber]);
  }

  if (!rows.length) {
    return "";
  }

  return `
    <div class="asset-card-secondary">
      ${rows.map(([label, value]) => `
        <div class="asset-secondary-row">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function buildWorkOrderPartSummaryMeta(part) {
  const fields = [
    ["Qty", part.quantity || "1"],
    ["UOM", part.uom || "Not set"],
    ["Unit Price", formatCurrencyValue(part.price, "$0.00")],
    ["Line Total", formatCurrency(calculatePartLineTotal(part))],
  ];

  return fields.map(([label, value]) => `
    <div class="asset-meta-chip">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join("");
}

function buildWorkOrderPartSecondaryDetails(part) {
  const rows = [];

  if (part.partNumber) {
    rows.push(["Part #", part.partNumber]);
  }

  if (part.vendor) {
    rows.push(["Vendor", part.vendor]);
  }

  if (!rows.length) {
    return "";
  }

  return `
    <div class="asset-card-secondary">
      ${rows.map(([label, value]) => `
        <div class="asset-secondary-row">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function buildWorkOrderPartsText(order) {
  return (order.parts || [])
    .map((part) => `${part.quantity || "1"} x ${part.name}${part.partNumber ? ` (${part.partNumber})` : ""}`)
    .join(", ");
}

function handleWorkOrderPartEditSubmit(event) {
  event.preventDefault();
  const order = state.workOrders.find((item) => item.id === currentWorkOrderDetailId);
  const partId = event.currentTarget.dataset.workOrderPartId;
  const part = order?.parts?.find((item) => item.id === partId);
  if (!part) {
    return;
  }

  const formData = new FormData(event.currentTarget);
  part.name = formData.get("name").trim();
  part.quantity = formData.get("quantity").trim();
  part.partNumber = formData.get("partNumber").trim();
  part.vendor = formData.get("vendor").trim();
  part.uom = sanitizeInventoryUom(formData.get("uom")) || part.uom;
  part.price = normalizeCurrencyInput(formData.get("price"));

  order.partsUsed = buildWorkOrderPartsText(order);
  editingWorkOrderPartId = null;
  render();
  renderWorkOrderDetail();
}

function handleWorkOrderPartDelete(partId) {
  const order = state.workOrders.find((item) => item.id === currentWorkOrderDetailId);
  const part = order?.parts?.find((item) => item.id === partId);
  if (!part) {
    return;
  }

  if (!window.confirm("Delete this part entry?")) {
    return;
  }

  order.parts = (order.parts || []).filter((item) => item.id !== partId);
  order.partsUsed = buildWorkOrderPartsText(order);
  editingWorkOrderPartId = null;
  render();
  renderWorkOrderDetail();
}

function sanitizeInventoryUom(value) {
  return INVENTORY_UOM_OPTIONS.includes(value) ? value : "";
}

function buildUomOptions(selectedValue = "") {
  return [
    `<option value="">Select UOM</option>`,
    ...INVENTORY_UOM_OPTIONS.map((option) => `<option value="${option}" ${selectedValue === option ? "selected" : ""}>${option}</option>`),
  ].join("");
}

function handleStartWorkOrderTimer() {
  const order = state.workOrders.find((item) => item.id === currentWorkOrderDetailId);
  if (!order || order.timerStartedAt) {
    return;
  }

  const technicianName = workOrderDetailTechnicianSelect?.value?.trim?.() || order.assignedTo || "";
  const hourlyRate = getTechnicianRate(technicianName);
  order.assignedTo = technicianName;
  order.hourlyRate = hourlyRate;
  order.timerStartedAt = new Date().toISOString();
  syncWorkOrderTimerDisplay(order);
  render();
  renderWorkOrderDetail();
}

function handleStopWorkOrderTimer() {
  const order = state.workOrders.find((item) => item.id === currentWorkOrderDetailId);
  if (!order || !order.timerStartedAt) {
    return;
  }

  const started = new Date(order.timerStartedAt);
  const ended = new Date();
  const hours = Math.max((ended - started) / 3600000, 0);
  const technicianName = workOrderDetailTechnicianSelect?.value?.trim?.() || order.assignedTo || "";
  const hourlyRate = getTechnicianRate(technicianName);

  order.timeEntries = order.timeEntries || [];
  order.timeEntries.push({
    id: createId(),
    entryDate: ended.toISOString().slice(0, 10),
    hours: hours.toFixed(2),
    note: "Timer entry",
    source: "Timer",
    technicianName,
    hourlyRate,
  });
  order.assignedTo = technicianName;
  order.hourlyRate = hourlyRate;
  order.timerStartedAt = "";

  syncWorkOrderTimerDisplay(order);
  render();
  renderWorkOrderDetail();
}

function calculateWorkOrderHours(order) {
  return (order.timeEntries || []).reduce((total, entry) => total + (Number.parseFloat(entry.hours) || 0), 0);
}

function calculateWorkOrderLaborCost(order) {
  const rate = parseCurrency(order.hourlyRate);
  return calculateWorkOrderHours(order) * rate;
}

function calculatePartLineTotal(part) {
  return (Number.parseFloat(part.quantity) || 0) * parseCurrency(part.price);
}

function calculateWorkOrderPartsSubtotal(order) {
  return (order.parts || []).reduce((total, part) => {
    return total + calculatePartLineTotal(part);
  }, 0);
}

function calculateWorkOrderPartsTax(order) {
  return calculateWorkOrderPartsSubtotal(order) * 0.09;
}

function calculateWorkOrderTotalCost(order) {
  return calculateWorkOrderLaborCost(order) + calculateWorkOrderPartsSubtotal(order) + calculateWorkOrderPartsTax(order);
}

function getWorkOrderNumber(order) {
  return order.workOrderNumber || buildLegacyWorkOrderNumber(order);
}

function generateWorkOrderNumber(date = new Date()) {
  const yearCode = String(date.getFullYear()).slice(-2);
  const existingMax = state.workOrders.reduce((max, order) => {
    const match = String(order.workOrderNumber || "").match(/^WO-(\d{2})(\d{3})$/);
    if (!match || match[1] !== yearCode) {
      return max;
    }
    return Math.max(max, Number.parseInt(match[2], 10) || 0);
  }, 0);
  const storedMax = Number(state.workOrderSequenceByYear?.[yearCode] || 0);
  const nextValue = Math.max(existingMax, storedMax) + 1;

  state.workOrderSequenceByYear = {
    ...(state.workOrderSequenceByYear || {}),
    [yearCode]: nextValue,
  };

  return `WO-${yearCode}${String(nextValue).padStart(3, "0")}`;
}

function buildLegacyWorkOrderNumber(order) {
  const createdAt = order.createdAt ? new Date(order.createdAt) : new Date();
  const yearCode = String(createdAt.getFullYear()).slice(-2);
  return `WO-${yearCode}${String(state.workOrders.indexOf(order) + 1).padStart(3, "0")}`;
}

function renderPrintWorkOrderSheet(order, asset) {
  if (!printWorkOrderSheet) {
    return;
  }

  const checklist = order.serviceChecklist || {};
  const laborCost = calculateWorkOrderLaborCost(order);
  const partsSubtotal = calculateWorkOrderPartsSubtotal(order);
  const partsTax = calculateWorkOrderPartsTax(order);
  const totalCost = calculateWorkOrderTotalCost(order);

  const brakeRows = [
    ["LF", buildWearPrintCell(checklist.brakeLfMm, "mm")],
    ["RF", buildWearPrintCell(checklist.brakeRfMm, "mm")],
    ["LR", buildWearPrintCell(checklist.brakeLrMm, "mm")],
    ["RR", buildWearPrintCell(checklist.brakeRrMm, "mm")],
  ];
  const tireRows = [
    ["LF", buildWearPrintCell(checklist.tireLf32, "/32")],
    ["RF", buildWearPrintCell(checklist.tireRf32, "/32")],
    ["LR", buildWearPrintCell(checklist.tireLr32, "/32")],
    ["RR", buildWearPrintCell(checklist.tireRr32, "/32")],
  ];
  const fluidRows = [
    ["Engine Oil", formatFluidDisplay(checklist.fluidEngineOil, checklist.fluidEngineOilAdded, checklist.fluidEngineOilAmount)],
    ["Coolant", formatFluidDisplay(checklist.fluidCoolant, checklist.fluidCoolantAdded, checklist.fluidCoolantAmount)],
    ["Brake Fluid", formatFluidDisplay(checklist.fluidBrake, checklist.fluidBrakeAdded, checklist.fluidBrakeAmount)],
    ["Transmission", formatFluidDisplay(checklist.fluidTransmission, checklist.fluidTransmissionAdded, checklist.fluidTransmissionAmount)],
    ["Power Steering", formatFluidDisplay(checklist.fluidPowerSteering, checklist.fluidPowerSteeringAdded, checklist.fluidPowerSteeringAmount)],
    ["Hydraulic", formatFluidDisplay(checklist.fluidHydraulic, checklist.fluidHydraulicAdded, checklist.fluidHydraulicAmount)],
    ["Washer", formatFluidDisplay(checklist.fluidWasher, checklist.fluidWasherAdded, checklist.fluidWasherAmount)],
    ["DEF", formatFluidDisplay(checklist.fluidDef, checklist.fluidDefAdded, checklist.fluidDefAmount)],
  ];
  const conditionRows = [
    ["Headlights", checklist.lightHeadlights || "-"],
    ["Brake Lights", checklist.lightBrakeLights || "-"],
    ["Turn Signals", checklist.lightTurnSignals || "-"],
    ["Markers", checklist.lightMarkers || "-"],
    ["Reverse", checklist.lightReverse || "-"],
    ["Interior", checklist.lightInterior || "-"],
    ["Glass", checklist.bodyGlass || "-"],
    ["Mirrors", checklist.bodyMirrors || "-"],
    ["Doors", checklist.bodyDoors || "-"],
    ["Panels", checklist.bodyPanels || "-"],
    ["Exterior", checklist.bodyExterior || "-"],
    ["Seats / Belts", checklist.bodySeatsBelts || "-"],
  ];
  const partsRows = (order.parts || []).map((part) => [
    part.quantity || "1",
    part.name || "-",
    part.partNumber || "-",
    formatCurrency(parseCurrency(part.price)),
    formatCurrency((Number.parseFloat(part.quantity) || 0) * parseCurrency(part.price)),
  ]);
  const laborRows = (order.timeEntries || []).map((entry) => [
    formatDate(entry.entryDate),
    entry.technicianName || order.assignedTo || "-",
    entry.note || entry.source || "-",
    entry.hours || "0",
  ]);

  printWorkOrderSheet.innerHTML = `
    <div class="print-sheet__header">
      <div>
        <p class="print-sheet__eyebrow">Service Work Order</p>
        <h1>${escapeHtml(order.title || "Work Order")}</h1>
        <p>${escapeHtml(getAssetName(order.assetId))}</p>
      </div>
      <div class="print-sheet__meta">
        <div><span>Work Order</span><strong>${escapeHtml(getWorkOrderNumber(order))}</strong></div>
        <div><span>Status</span><strong>${escapeHtml(getWorkOrderStatusLabel(order.status))}</strong></div>
        <div><span>Service Date</span><strong>${escapeHtml(formatDate(order.serviceDate))}</strong></div>
        <div><span>Technician</span><strong>${escapeHtml(order.assignedTo || "Unassigned")}</strong></div>
      </div>
    </div>

    <div class="print-sheet__grid print-sheet__grid--two">
      <section class="print-card">
        <h2>Asset Details</h2>
        <div class="print-kv">
          <div><span>Asset #</span><strong>${escapeHtml(asset ? getAssetNumberLabel(asset) : "Not set")}</strong></div>
          <div><span>Type</span><strong>${escapeHtml(order.assetType || asset?.type || "-")}</strong></div>
          <div><span>Year / Make / Model</span><strong>${escapeHtml(asset ? [asset.year, asset.make, asset.model].filter(Boolean).join(" ") : "-")}</strong></div>
          <div><span>Plate / VIN</span><strong>${escapeHtml(asset ? [asset.licensePlate, asset.vin || asset.serial].filter(Boolean).join(" / ") : "-")}</strong></div>
          <div><span>Meter</span><strong>${escapeHtml(order.meterReading || "-")}</strong></div>
          <div><span>Priority</span><strong>${escapeHtml(order.priority || "-")}</strong></div>
        </div>
      </section>
      <section class="print-card print-card--totals">
        <h2>Cost Summary</h2>
        <div class="print-totals">
          <div><span>Labor</span><strong>${escapeHtml(formatCurrency(laborCost))}</strong></div>
          <div><span>Parts</span><strong>${escapeHtml(formatCurrency(partsSubtotal))}</strong></div>
          <div><span>Parts Tax (9%)</span><strong>${escapeHtml(formatCurrency(partsTax))}</strong></div>
          <div class="print-total-row"><span>Total</span><strong>${escapeHtml(formatCurrency(totalCost))}</strong></div>
        </div>
      </section>
    </div>

    <section class="print-card">
      <h2>Service Notes</h2>
      <div class="print-sheet__grid print-sheet__grid--two compact-grid">
        <div>
          <h3>Complaint / Request</h3>
          <p>${escapeHtml(order.description || "No complaint entered.")}</p>
        </div>
        <div>
          <h3>Work Performed</h3>
          <p>${escapeHtml(order.workPerformed || "No work performed notes entered.")}</p>
        </div>
        <div>
          <h3>Findings</h3>
          <p>${escapeHtml(order.findings || "No findings entered.")}</p>
        </div>
        <div>
          <h3>Recommendations</h3>
          <p>${escapeHtml(order.recommendations || "No recommendations entered.")}</p>
        </div>
      </div>
    </section>

    <section class="print-card">
      <h2>Measurements and Inspection Details</h2>
      <div class="print-sheet__grid print-sheet__grid--two compact-grid">
        ${buildPrintTable("", ["Brake", "MM"], brakeRows)}
        ${buildPrintTable("", ["Tire", "32nds"], tireRows)}
      </div>
      <div class="print-sheet__grid print-sheet__grid--two compact-grid">
        ${buildPrintTable("", ["Fluid", "Condition"], fluidRows)}
        ${buildPrintTable("", ["Light / Body", "Condition"], conditionRows)}
      </div>
      ${(checklist.brakeNotes || checklist.tireNotes || checklist.fluidNotes || checklist.lightingNotes || checklist.bodyNotes) ? `
        <div class="print-notes">
          ${checklist.brakeNotes ? `<p><strong>Brake Notes:</strong> ${escapeHtml(checklist.brakeNotes)}</p>` : ""}
          ${checklist.tireNotes ? `<p><strong>Tire Notes:</strong> ${escapeHtml(checklist.tireNotes)}</p>` : ""}
          ${checklist.fluidNotes ? `<p><strong>Fluid Notes:</strong> ${escapeHtml(checklist.fluidNotes)}</p>` : ""}
          ${checklist.lightingNotes ? `<p><strong>Lighting Notes:</strong> ${escapeHtml(checklist.lightingNotes)}</p>` : ""}
          ${checklist.bodyNotes ? `<p><strong>Body Notes:</strong> ${escapeHtml(checklist.bodyNotes)}</p>` : ""}
        </div>
      ` : ""}
    </section>

    <section class="print-card">
      <h2>Labor Breakdown</h2>
      ${buildPrintTable("", ["Date", "Technician", "Description", "Hours"], laborRows.length ? laborRows : [["-", "-", "No time entries", "0.00"]])}
    </section>

    <section class="print-card">
      <h2>Parts Breakdown</h2>
      ${buildPrintTable("", ["Qty", "Item", "Part #", "Unit Price", "Extended"], partsRows.length ? partsRows : [["-", "No parts added", "-", "-", "-"]])}
    </section>
  `;
}

function buildPrintTable(title, headers, rows) {
  return `
    <div class="print-table-card">
      ${title ? `<h3>${escapeHtml(title)}</h3>` : ""}
      <table class="print-table">
        <thead>
          <tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rows.map((row) => `<tr>${row.map((cell) => renderPrintTableCell(cell)).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderPrintTableCell(cell) {
  if (cell && typeof cell === "object") {
    return `<td class="${escapeHtml(cell.className || "")}">${cell.html || escapeHtml(cell.text || "")}</td>`;
  }

  return `<td>${escapeHtml(cell)}</td>`;
}

function buildWearPrintCell(value, unit) {
  if (!value && value !== 0 && value !== "0") {
    return { text: "-", className: "" };
  }

  const color = getWearColor(value).toLowerCase();
  return {
    className: `print-wear-cell ${color}`,
    html: `<span class="print-wear-value">${escapeHtml(`${value}${unit}`)}</span>`,
  };
}

function getTechnicianRate(technicianName) {
  return state.technicians.find((tech) => tech.name === technicianName)?.hourlyRate || "";
}

function syncWorkOrderTimerDisplay(order) {
  if (!workOrderTimerDisplay) {
    return;
  }

  if (workOrderTimerIntervalId) {
    window.clearInterval(workOrderTimerIntervalId);
    workOrderTimerIntervalId = null;
  }

  const updateTimer = () => {
    workOrderTimerDisplay.value = formatTimerDuration(order?.timerStartedAt);
  };

  updateTimer();

  if (order?.timerStartedAt) {
    workOrderTimerIntervalId = window.setInterval(updateTimer, 1000);
  }
}

function formatTimerDuration(startedAt) {
  if (!startedAt) {
    return "00:00:00";
  }

  const elapsedMs = Math.max(Date.now() - new Date(startedAt).getTime(), 0);
  const totalSeconds = Math.floor(elapsedMs / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function handlePrintWorkOrder() {
  if (!currentWorkOrderDetailId) {
    return;
  }

  document.body.classList.add("print-mode");
  window.print();
}

function handleDeleteWorkOrder() {
  const order = state.workOrders.find((item) => item.id === currentWorkOrderDetailId);
  if (!order) {
    return;
  }

  const workOrderLabel = getWorkOrderNumber(order);
  const workOrderTitle = order.title || "this work order";
  if (!window.confirm(`Delete ${workOrderLabel} - ${workOrderTitle}? This cannot be undone.`)) {
    return;
  }

  state.workOrders = state.workOrders.filter((item) => item.id !== order.id);
  currentWorkOrderDetailId = null;
  workOrderPartDrafts = [];
  editingWorkOrderTimeEntryId = null;
  editingWorkOrderPartId = null;
  render();
  setActivePage("work-orders");
}

function syncCompletedWorkOrdersToMaintenance() {
  state.workOrders.forEach((order) => {
    if (!isWorkOrderComplete(order.status)) {
      return;
    }

    const existingLog = state.maintenanceLogs.find((log) => log.sourceWorkOrderId === order.id);
    const workOrderNumber = getWorkOrderNumber(order);
    const totalCost = calculateWorkOrderTotalCost(order);
    const summary = [
      workOrderNumber,
      order.description ? `Complaint: ${order.description}` : "",
      order.workPerformed ? `Work Performed: ${order.workPerformed}` : "",
      order.findings ? `Findings: ${order.findings}` : "",
      order.recommendations ? `Recommendations: ${order.recommendations}` : "",
    ].filter(Boolean).join(" | ");

    const syncedLog = {
      id: existingLog?.id || createId(),
      assetId: order.assetId,
      date: order.serviceDate || order.dueDate || String(order.createdAt || "").slice(0, 10),
      serviceType: order.title || "Completed Work Order",
      meter: order.meterReading || "",
      summary: summary || workOrderNumber,
      nextDueDate: existingLog?.nextDueDate || "",
      cost: formatCurrency(totalCost),
      fileName: existingLog?.fileName || "",
      fileDataUrl: existingLog?.fileDataUrl || "",
      fileUrl: existingLog?.fileUrl || "",
      fileStoragePath: existingLog?.fileStoragePath || "",
      sourceWorkOrderId: order.id,
      sourceWorkOrderNumber: workOrderNumber,
      createdAt: existingLog?.createdAt || new Date().toISOString(),
    };

    if (!existingLog) {
      state.maintenanceLogs.unshift(syncedLog);
    }
  });
}

function parseCurrency(value) {
  return Number.parseFloat(String(value || "").replace(/[^0-9.-]/g, "")) || 0;
}

function normalizeCurrencyInput(value) {
  return String(value || "").trim() ? formatCurrency(parseCurrency(value)) : "";
}

function formatCurrencyValue(value, fallback = "") {
  return String(value || "").trim() ? formatCurrency(parseCurrency(value)) : fallback;
}

function formatCurrency(value) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  }).format(value || 0);
}

function buildMaintenanceDetailFields(log, asset) {
  const fields = [
    ["Asset", asset ? buildAssetDisplayName(asset) : getAssetName(log.assetId)],
    ["Asset Type", asset?.type || "Not set"],
    ["Asset #", asset ? getAssetNumberLabel(asset) : "Not set"],
    ["Year", asset?.year || "N/A"],
    ["Make", asset?.make || "N/A"],
    ["Model", asset?.model || "N/A"],
    ["License Plate", asset?.licensePlate || "Not set"],
    ["VIN / Serial", asset?.vin || asset?.vinSerial || "Not set"],
    ["Category", asset?.category || "Not set"],
    ["Service Date", formatDate(log.date)],
    ["Vendor", log.vendor || "Not set"],
    ["Meter", log.meter || "N/A"],
    ["Cost", formatCurrencyValue(log.cost, "N/A")],
  ];

  return fields.map(([label, value]) => `
    <div class="detail-item">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join("");
}

function buildMaintenanceAttachmentPreview(log) {
  const attachmentUrl = getAttachmentUrl(log);
  if (!attachmentUrl) {
    return "";
  }

  const isImage = /\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(String(log.fileName || "")) || String(attachmentUrl).startsWith("data:image/");

  return `
    <div class="maintenance-preview">
      <div class="panel-heading">
        <div>
          <p class="section-label">Attachment</p>
          <h3>${escapeHtml(log.fileName || "Attached File")}</h3>
        </div>
      </div>
      ${isImage
        ? `<img class="maintenance-preview-media" src="${attachmentUrl}" alt="${escapeHtml(log.fileName || "Maintenance attachment")}">`
        : `<iframe class="maintenance-preview-media" src="${attachmentUrl}" title="${escapeHtml(log.fileName || "Maintenance attachment")}"></iframe>`}
      <p><a href="${attachmentUrl}" download="${escapeHtml(log.fileName || "maintenance-file")}">Download attachment</a></p>
    </div>
  `;
}

function buildMaintenanceEditCard(log) {
  return `
    <form id="maintenanceDetailEditForm" class="inline-edit-form" enctype="multipart/form-data">
      <div class="detail-grid">
        <label><span>Service Date</span><input type="date" name="date" value="${escapeHtml(log.date || "")}" required></label>
        <label><span>Service Type</span><input name="serviceType" value="${escapeHtml(log.serviceType || "")}" required></label>
        <label><span>Vendor</span><select name="vendorSelect">${buildMaintenanceVendorOptions(log.vendor || "")}</select></label>
        <label><span>Meter</span><input name="meter" value="${escapeHtml(log.meter || "")}"></label>
        <label><span>Next Due Date</span><input type="date" name="nextDueDate" value="${escapeHtml(log.nextDueDate || "")}"></label>
        <label><span>Cost</span><input name="cost" value="${escapeHtml(formatCurrencyValue(log.cost))}" placeholder="$245.00"></label>
        <label><span>Replace Attachment</span><input type="file" name="file" accept=".pdf,image/*"></label>
        <label class="full-span"><span>Summary</span><textarea name="summary" rows="4">${escapeHtml(log.summary || "")}</textarea></label>
      </div>
      ${buildMaintenanceAttachmentPreview(log)}
      <div class="action-row form-actions">
        <button type="submit" class="button-primary">Save Changes</button>
        <button type="button" class="button-secondary" id="cancelMaintenanceEditButton">Cancel</button>
      </div>
    </form>
  `;
}

function buildInlineAssetEditCard(asset) {
  const fields = asset.type === "Vehicle"
    ? `
      <label><span>Asset #</span><input name="assetNumber" value="${escapeHtml(asset.assetNumber || "")}"></label>
      <label><span>Name</span><input name="name" value="${escapeHtml(asset.name || "")}"></label>
      <label><span>Year</span><input name="year" value="${escapeHtml(asset.year || "")}"></label>
      <label><span>Make</span><input name="make" value="${escapeHtml(asset.make || "")}"></label>
      <label><span>Model</span><input name="model" value="${escapeHtml(asset.model || "")}"></label>
      <label><span>License Plate</span><input name="licensePlate" value="${escapeHtml(asset.licensePlate || "")}"></label>
      <label><span>VIN</span><input name="vin" value="${escapeHtml(asset.vin || "")}"></label>
      <label><span>Category</span><input name="category" value="${escapeHtml(asset.category || "")}"></label>
      <label class="full-span"><span>Assigned Location</span><input name="location" value="${escapeHtml(asset.location || "")}"></label>
    `
    : asset.type === "Trailer"
      ? `
      <label><span>Trailer #</span><input name="trailerNumber" value="${escapeHtml(asset.trailerNumber || "")}"></label>
      <label><span>Location</span><input name="location" value="${escapeHtml(asset.location || "")}"></label>
      <label><span>Year</span><input name="year" value="${escapeHtml(asset.year || "")}"></label>
      <label><span>Make</span><input name="make" value="${escapeHtml(asset.make || "")}"></label>
      <label><span>Model</span><input name="model" value="${escapeHtml(asset.model || "")}"></label>
      <label><span>GVWR</span><input name="gvwr" value="${escapeHtml(asset.gvwr || "")}"></label>
      <label><span>License Plate</span><input name="licensePlate" value="${escapeHtml(asset.licensePlate || "")}"></label>
      <label><span>VIN</span><input name="vin" value="${escapeHtml(asset.vin || "")}"></label>
      <label><span>Category</span><input name="category" value="${escapeHtml(asset.category || "")}"></label>
    `
      : `
      <label><span>Equipment #</span><input name="equipmentNumber" value="${escapeHtml(asset.equipmentNumber || "")}"></label>
      <label><span>Location</span><input name="location" value="${escapeHtml(asset.location || "")}"></label>
      <label><span>Year</span><input name="year" value="${escapeHtml(asset.year || "")}"></label>
      <label><span>Make</span><input name="make" value="${escapeHtml(asset.make || "")}"></label>
      <label><span>Model</span><input name="model" value="${escapeHtml(asset.model || "")}"></label>
      <label><span>Model #</span><input name="modelNumber" value="${escapeHtml(asset.modelNumber || "")}"></label>
      <label><span>License Plate</span><input name="licensePlate" value="${escapeHtml(asset.licensePlate || "")}"></label>
      <label><span>VIN / Serial</span><input name="vinSerial" value="${escapeHtml(asset.vinSerial || "")}"></label>
      <label><span>Engine Serial #</span><input name="engineSerial" value="${escapeHtml(asset.engineSerial || "")}"></label>
      <label><span>EIN</span><input name="ein" value="${escapeHtml(asset.ein || "")}"></label>
      <label><span>Category</span><input name="category" value="${escapeHtml(asset.category || "")}"></label>
    `;

  return `
    <form id="inlineAssetEditForm" class="inline-edit-card">
      <div class="detail-grid edit-grid">${fields}</div>
      <label class="full-span">
        <span>Notes</span>
        <textarea name="notes" rows="3">${escapeHtml(asset.notes || "")}</textarea>
      </label>
      <div class="action-row form-actions">
        <button type="submit" class="button-primary">Save Changes</button>
        <button type="button" class="button-secondary" id="cancelInlineAssetEditButton">Cancel</button>
      </div>
    </form>
  `;
}

function createInlineEditedAsset(formData, asset) {
  if (asset.type === "Vehicle") {
    const updated = {
      ...asset,
      assetNumber: formData.get("assetNumber").trim(),
      name: formData.get("name").trim(),
      year: formData.get("year").trim(),
      make: formData.get("make").trim(),
      model: formData.get("model").trim(),
      licensePlate: formData.get("licensePlate").trim(),
      vin: formData.get("vin").trim(),
      category: formData.get("category").trim(),
      location: formData.get("location").trim(),
      notes: formData.get("notes").trim(),
    };
    updated.unitNumber = updated.assetNumber;
    updated.serial = updated.vin;
    return updated;
  }

  if (asset.type === "Trailer") {
    const updated = {
      ...asset,
      trailerNumber: formData.get("trailerNumber").trim(),
      location: formData.get("location").trim(),
      year: formData.get("year").trim(),
      make: formData.get("make").trim(),
      model: formData.get("model").trim(),
      gvwr: formData.get("gvwr").trim(),
      licensePlate: formData.get("licensePlate").trim(),
      vin: formData.get("vin").trim(),
      category: formData.get("category").trim(),
      notes: formData.get("notes").trim(),
    };
    updated.name = buildAssetDisplayName(updated);
    updated.unitNumber = updated.trailerNumber;
    updated.serial = updated.vin;
    return updated;
  }

  const updated = {
    ...asset,
    equipmentNumber: formData.get("equipmentNumber").trim(),
    location: formData.get("location").trim(),
    year: formData.get("year").trim(),
    make: formData.get("make").trim(),
    model: formData.get("model").trim(),
    modelNumber: formData.get("modelNumber").trim(),
    licensePlate: formData.get("licensePlate").trim(),
    vinSerial: formData.get("vinSerial").trim(),
    engineSerial: formData.get("engineSerial").trim(),
    ein: formData.get("ein").trim(),
    category: formData.get("category").trim(),
    notes: formData.get("notes").trim(),
  };
  updated.name = buildAssetDisplayName(updated);
  updated.unitNumber = updated.equipmentNumber;
  updated.serial = updated.vinSerial;
  return updated;
}

function createAssetFromForm(formData, type, category) {
  const shared = {
    id: createId(),
    type,
    category,
    notes: formData.get("notes").trim(),
    active: true,
  };

  if (type === "Vehicle") {
    return {
      ...shared,
      assetNumber: formData.get("assetNumber").trim(),
      name: formData.get("name").trim(),
      year: formData.get("year").trim(),
      make: formData.get("make").trim(),
      model: formData.get("model").trim(),
      licensePlate: formData.get("licensePlate").trim(),
      vin: formData.get("vin").trim(),
      location: formData.get("locationVehicle").trim(),
      unitNumber: formData.get("assetNumber").trim(),
      serial: formData.get("vin").trim(),
    };
  }

  if (type === "Trailer") {
    return {
      ...shared,
      trailerNumber: formData.get("assetNumber").trim(),
      location: formData.get("location").trim(),
      year: formData.get("year").trim(),
      make: formData.get("make").trim(),
      model: formData.get("model").trim(),
      gvwr: formData.get("gvwr").trim(),
      licensePlate: formData.get("licensePlate").trim(),
      vin: formData.get("trailerVin").trim(),
      name: buildAssetDisplayName({
        type: "Trailer",
        year: formData.get("year").trim(),
        make: formData.get("make").trim(),
        model: formData.get("model").trim(),
      }),
      unitNumber: formData.get("assetNumber").trim(),
      serial: formData.get("trailerVin").trim(),
    };
  }

  return {
    ...shared,
    equipmentNumber: formData.get("assetNumber").trim(),
    location: formData.get("location").trim(),
    year: formData.get("year").trim(),
    make: formData.get("make").trim(),
    model: formData.get("model").trim(),
    modelNumber: formData.get("modelNumber").trim(),
    licensePlate: formData.get("licensePlate").trim(),
    vinSerial: formData.get("vinSerial").trim(),
    engineSerial: formData.get("engineSerial").trim(),
    ein: formData.get("ein").trim(),
    name: buildAssetDisplayName({
      type: "Equipment",
      year: formData.get("year").trim(),
      make: formData.get("make").trim(),
      model: formData.get("model").trim(),
      modelNumber: formData.get("modelNumber").trim(),
    }),
    unitNumber: formData.get("assetNumber").trim(),
    serial: formData.get("vinSerial").trim(),
  };
}

function createVehicleAssetFromImport(vehicle) {
  return {
    id: createId(),
    type: "Vehicle",
    category: vehicle.category || "Unassigned",
    active: true,
    assetNumber: vehicle.assetNumber || "",
    name: buildVehicleName(vehicle),
    year: vehicle.year || "",
    make: vehicle.make || "",
    model: vehicle.model || "",
    licensePlate: vehicle.licensePlate || "",
    vin: vehicle.vin || "",
    location: vehicle.driverProject || "",
    notes: buildVehicleNotes(vehicle),
    unitNumber: vehicle.assetNumber || "",
    serial: vehicle.vin || "",
  };
}

function createEquipmentAssetFromImport(item) {
  return {
    id: createId(),
    type: "Equipment",
    category: item.model || "Unassigned",
    active: true,
    equipmentNumber: item.equipmentNumber || "",
    location: item.projectLocation || "",
    year: item.year || "",
    make: item.make || "",
    model: item.model || "",
    modelNumber: item.modelNumber || "",
    licensePlate: item.licensePlate || "",
    vinSerial: item.vinSerial || "",
    engineSerial: item.engineSerial || "",
    ein: item.ein || "",
    name: buildEquipmentName(item),
    notes: buildEquipmentNotes(item),
    unitNumber: item.equipmentNumber || "",
    serial: item.vinSerial || "",
  };
}

function createTrailerAssetFromImport(item) {
  return {
    id: createId(),
    type: "Trailer",
    category: item.model || "Unassigned",
    active: true,
    trailerNumber: item.trailerNumber || "",
    location: item.project || "",
    year: item.year || "",
    make: item.make || "",
    model: item.model || "",
    gvwr: item.gvwr || "",
    licensePlate: item.licensePlate || "",
    vin: item.vin || "",
    name: buildTrailerName(item),
    notes: buildTrailerNotes(item),
    unitNumber: item.trailerNumber || "",
    serial: item.vin || "",
  };
}

function openAssetDetail(assetId) {
  currentAssetDetailId = assetId;
  assetEditMode = false;
  setActivePage("asset-detail");
}

function renderAssetDetail() {
  const asset = state.assets.find((item) => item.id === currentAssetDetailId);

  if (!asset) {
    assetDetailTitle.textContent = "Asset Detail";
    assetDetailCard.innerHTML = document.querySelector("#emptyStateTemplate").innerHTML;
    assetDetailMaintenance.innerHTML = document.querySelector("#emptyStateTemplate").innerHTML;
    assetDetailWorkOrders.innerHTML = document.querySelector("#emptyStateTemplate").innerHTML;
    assetDetailCompliance.innerHTML = document.querySelector("#emptyStateTemplate").innerHTML;
    assetDetailDocuments.innerHTML = document.querySelector("#emptyStateTemplate").innerHTML;
    return;
  }

  assetDetailTitle.textContent = buildAssetDisplayName(asset);
  deactivateAssetButton.textContent = asset.active === false ? "Reactivate Asset" : "Deactivate Asset";
  editAssetButton.textContent = assetEditMode ? "Editing" : "Edit Asset";
  editAssetButton.disabled = assetEditMode;
  assetDetailCard.innerHTML = assetEditMode ? buildInlineAssetEditCard(asset) : `
    <article class="record-card">
      <header>
        <div>
          <h4>${escapeHtml(buildAssetDisplayName(asset))}</h4>
          <div class="meta">${buildAssetSummaryMeta(asset)}</div>
        </div>
        <span class="pill ${asset.active === false ? "inactive" : ""}">${escapeHtml(asset.active === false ? "Inactive" : asset.location || "Unassigned")}</span>
      </header>
      <div class="detail-grid">${buildAssetDetailFields(asset)}</div>
      <p>${escapeHtml(asset.notes || "No notes yet.")}</p>
    </article>
  `;

  const inlineEditForm = document.querySelector("#inlineAssetEditForm");
  if (inlineEditForm) {
    inlineEditForm.addEventListener("submit", handleAssetEditSubmit);
  }

  const cancelInlineEditButton = document.querySelector("#cancelInlineAssetEditButton");
  if (cancelInlineEditButton) {
    cancelInlineEditButton.addEventListener("click", () => {
      assetEditMode = false;
      renderAssetDetail();
    });
  }

  const maintenanceItems = state.maintenanceLogs.filter((log) => log.assetId === asset.id);
  const workOrderItems = state.workOrders.filter((item) => item.assetId === asset.id);
  const complianceItems = state.complianceRecords.filter((item) => item.assetId === asset.id);
  const documentItems = state.documents.filter((item) => item.assetId === asset.id);

  assetDetailMaintenance.innerHTML = renderCollection(maintenanceItems, (log) => `
    <button class="record-card record-button" data-maintenance-id="${log.id}">
      <h4>${escapeHtml(log.serviceType)}</h4>
      <div class="meta">
        <span>${formatDate(log.date)}</span>
        <span>Meter: ${escapeHtml(log.meter || "N/A")}</span>
        <span>Vendor: ${escapeHtml(log.vendor || "Not set")}</span>
        <span>Cost: ${escapeHtml(formatCurrencyValue(log.cost, "N/A"))}</span>
        ${log.sourceWorkOrderNumber ? `<span>From ${escapeHtml(log.sourceWorkOrderNumber)}</span>` : ""}
      </div>
      <p>${escapeHtml(log.summary || "No summary entered.")}</p>
      ${getAttachmentUrl(log) ? `<p><a href="${getAttachmentUrl(log)}" download="${escapeHtml(log.fileName || "maintenance-file")}">Download attachment</a></p>` : ""}
    </button>
  `);

  assetDetailMaintenance.querySelectorAll("[data-maintenance-id]").forEach((button) => {
    button.addEventListener("click", () => openMaintenanceDetail(button.dataset.maintenanceId));
  });

  assetDetailWorkOrders.innerHTML = renderCollection(workOrderItems, (order) => `
    <button class="record-card record-button" data-work-order-id="${order.id}">
      <h4>${escapeHtml(order.title)}</h4>
      <div class="meta">
        <span>${escapeHtml(getWorkOrderNumber(order))}</span>
        <span>Status: ${escapeHtml(getWorkOrderStatusLabel(order.status))}</span>
        <span>Priority: ${escapeHtml(order.priority)}</span>
        <span>Due: ${formatDate(order.dueDate)}</span>
        <span>Hours: ${escapeHtml(calculateWorkOrderHours(order).toFixed(2))}</span>
      </div>
      <p>${escapeHtml(order.description || "No description entered.")}</p>
      <p>${escapeHtml(order.findings || "Open this work order for full technician details.")}</p>
    </button>
  `);

  assetDetailWorkOrders.querySelectorAll("[data-work-order-id]").forEach((button) => {
    button.addEventListener("click", () => openWorkOrderDetail(button.dataset.workOrderId));
  });

  assetDetailCompliance.innerHTML = renderCollection(complianceItems, (record) => {
    const alertState = getAlertState(record.expirationDate);
    return `
      <article class="record-card">
        <h4>${escapeHtml(record.requirementType)}</h4>
        <div class="meta">
          <span>${escapeHtml(record.provider || "No provider")}</span>
          <span>Ref: ${escapeHtml(record.reference || "N/A")}</span>
          <span>Expires: ${formatDate(record.expirationDate)}</span>
        </div>
        <p><span class="pill ${alertState.className}">${escapeHtml(alertState.label)}</span></p>
      </article>
    `;
  });

  assetDetailDocuments.innerHTML = renderCollection(documentItems, (doc) => `
    <article class="record-card">
      <h4>${escapeHtml(doc.title)}</h4>
      <div class="meta">
        <span>${escapeHtml(doc.category)}</span>
        <span>${escapeHtml(doc.fileName || "No file attached")}</span>
      </div>
      <p>${escapeHtml(doc.notes || "No notes entered.")}</p>
      ${getAttachmentUrl(doc) ? `<p><a href="${getAttachmentUrl(doc)}" download="${escapeHtml(doc.fileName || "document")}">Download file</a></p>` : ""}
    </article>
  `);
}

function populateAssetEditForm(asset) {
  assetEditForm.elements.type.value = asset.type || "";
  renderEditAssetCategoryOptions(asset.type || "", asset.category || "");
  assetEditForm.elements.assetNumber.value = asset.assetNumber || asset.trailerNumber || asset.equipmentNumber || "";
  assetEditForm.elements.name.value = asset.name || "";
  assetEditForm.elements.year.value = asset.year || "";
  assetEditForm.elements.make.value = asset.make || "";
  assetEditForm.elements.model.value = asset.model || "";
  assetEditForm.elements.modelNumber.value = asset.modelNumber || "";
  assetEditForm.elements.gvwr.value = asset.gvwr || "";
  assetEditForm.elements.licensePlate.value = asset.licensePlate || "";
  assetEditForm.elements.vin.value = asset.vin || "";
  assetEditForm.elements.trailerVin.value = asset.vin || "";
  assetEditForm.elements.vinSerial.value = asset.vinSerial || "";
  assetEditForm.elements.engineSerial.value = asset.engineSerial || "";
  assetEditForm.elements.ein.value = asset.ein || "";
  assetEditForm.elements.location.value = asset.type === "Vehicle" ? "" : asset.location || "";
  assetEditForm.elements.locationVehicle.value = asset.type === "Vehicle" ? asset.location || "" : "";
  assetEditForm.elements.notes.value = asset.notes || "";
}

function buildVehicleName(vehicle) {
  return [vehicle.year, vehicle.make, vehicle.model].filter(Boolean).join(" ");
}

function buildVehicleNotes(vehicle) {
  const notes = [];
  if (vehicle.driverProject) {
    notes.push(`Assigned: ${vehicle.driverProject}`);
  }
  if (vehicle.licensePlate) {
    notes.push(`Plate: ${vehicle.licensePlate}`);
  }
  if (vehicle.registrationRenewalDate) {
    notes.push(`Registration renewal: ${vehicle.registrationRenewalDate}`);
  }
  if (vehicle.registrationPaid) {
    notes.push(`Registration paid: ${vehicle.registrationPaid}`);
  }
  if (vehicle.paidDate) {
    notes.push(`Paid date: ${vehicle.paidDate}`);
  }
  return notes.join(" | ");
}

function buildEquipmentName(item) {
  return [item.year, item.make, item.model, item.modelNumber].filter(Boolean).join(" ");
}

function buildEquipmentNotes(item) {
  const notes = [];
  if (item.projectLocation) {
    notes.push(`Location: ${item.projectLocation}`);
  }
  if (item.engineSerial) {
    notes.push(`Engine serial: ${item.engineSerial}`);
  }
  if (item.ein) {
    notes.push(`EIN: ${item.ein}`);
  }
  if (item.tier) {
    notes.push(`Tier: ${item.tier}`);
  }
  if (item.hourMeterEnd2026) {
    notes.push(`Hour meter: ${item.hourMeterEnd2026}`);
  }
  if (item.purchaseDate) {
    notes.push(`Purchase date: ${item.purchaseDate}`);
  }
  if (item.purchaseCost) {
    notes.push(`Purchase cost: ${item.purchaseCost}`);
  }
  if (item.licensePlate) {
    notes.push(`Plate: ${item.licensePlate}`);
  }
  return notes.join(" | ");
}

function buildTrailerName(item) {
  return [item.year, item.make, item.model].filter(Boolean).join(" ");
}

function buildTrailerNotes(item) {
  const notes = [];
  if (item.project) {
    notes.push(`Project: ${item.project}`);
  }
  if (item.gvwr) {
    notes.push(`GVWR: ${item.gvwr}`);
  }
  if (item.licensePlate) {
    notes.push(`Plate: ${item.licensePlate}`);
  }
  return notes.join(" | ");
}

function createId() {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getAttachmentUrl(item) {
  return item?.fileUrl || item?.fileDataUrl || "";
}

async function saveAttachmentFile(file, folderName) {
  if (!(file && file.size)) {
    return {
      fileName: "",
      fileDataUrl: "",
      fileUrl: "",
      fileStoragePath: "",
    };
  }

  if (supabaseClient && currentUser) {
    const safeName = file.name.replace(/[^\w.\-]+/g, "_");
    const storagePath = `fleet-hub/${folderName}/${Date.now()}-${createId()}-${safeName}`;
    const { error } = await supabaseClient.storage
      .from(CLOUD_STORAGE_BUCKET)
      .upload(storagePath, file, { upsert: false });

    if (error) {
      throw error;
    }

    const { data } = supabaseClient.storage
      .from(CLOUD_STORAGE_BUCKET)
      .getPublicUrl(storagePath);

    return {
      fileName: file.name,
      fileDataUrl: "",
      fileUrl: data?.publicUrl || "",
      fileStoragePath: storagePath,
    };
  }

  return {
    fileName: file.name,
    fileDataUrl: await readFileAsDataUrl(file),
    fileUrl: "",
    fileStoragePath: "",
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
