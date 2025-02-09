let fullBodyCheckupPackages = [{ 
    id: 'FBP-001',
    testName: "Basic Health Checkup Package", 
    price: 2000 
},{ 
    id: 'FBP-002',
    testName: "Diabetes Health Checkup Package", 
    price: 3000 
},{ 
    id: 'FBP-003',
    testName: "Women's Health Checkup Package", 
    price: 2500 
},{ 
    id: 'FBP-004',
    testName: "Men's Health Checkup Package", 
    price: 2500 
},{ 
    id: 'FBP-005',
    testName: "Senior Citizen Health Checkup Package", 
    price: 4500 
},{ 
    id: 'FBP-006',
    testName: "Pediatric Health Checkup Package", 
    price: 2800 
},{ 
    id: 'FBP-007',
    testName: "Annual Health Checkup Package", 
    price: 3500 
},{ 
    id: 'FBP-008',
    testName: "Fitness Health Checkup Package", 
    price: 3000 
},{ 
    id: 'FBP-009',
    testName: "Cancer Screening Health Checkup Package", 
    price: 4500 
},{ 
    id: 'FBP-010',
    testName: "Allergy Testing Health Checkup Package", 
    price: 2800
}];


let diabetesTests = [{ 
    id: 'Dia-001',
    testName: "Fasting Blood Glucose (FBG) Test", 
    price: 500 
},{ 
    id: 'Dia-002',
    testName: "Postprandial Blood Glucose (PPBG) Test", 
    price: 500 
},{ 
    id: 'Dia-003',
    testName: "Glycated Hemoglobin (HbA1c) Test", 
    price: 1000 
},{ 
    id: 'Dia-004',
    testName: "Oral Glucose Tolerance Test (OGTT)", 
    price: 2000 
},{ 
    id: 'Dia-005',
    testName: "Insulin Level Test", 
    price: 1500 
},{ 
    id: 'Dia-006',
    testName: "C-peptide Test", 
    price: 2000 
},{ 
    id: 'Dia-007',
    testName: "Urine Glucose Test", 
    price: 300 
},{ 
    id: 'Dia-008',
    testName: "Fructosamine Test", 
    price: 1000 
},{ 
    id: 'Dia-009',
    testName: "Lipid Profile", 
    price: 1500 
},{ 
    id: 'Dia-010',
    testName: "Microalbuminuria Test", 
    price: 1000 
}];


let thyroidTests = [{ 
    id: 'Thy-001',
    testName: "Thyroid Stimulating Hormone (TSH) Test", 
    price: 500 
},{ 
    id: 'Thy-002',
    testName: "Free Thyroxine (T4) Test", 
    price: 600 
},{ 
    id: 'Thy-003',
    testName: "Total Thyroxine (T4) Test", 
    price: 700 
},{ 
    id: 'Thy-004',
    testName: "Free Triiodothyronine (T3) Test", 
    price: 550 
},{ 
    id: 'Thy-005',
    testName: "Total Triiodothyronine (T3) Test", 
    price: 750 
},
{ 
    id: 'Thy-006',
    testName: "Thyroid Peroxidase Antibodies (TPOAb) Test", 
    price: 800 
},{ 
    id: 'Thy-007',
    testName: "Thyroglobulin Antibodies (TgAb) Test", 
    price: 850 
},{ 
    id: 'Thy-008',
    testName: "Thyroid Ultrasound", 
    price: 1200 
},{ 
    id: 'Thy-009',
    testName: "Fine Needle Aspiration Biopsy (FNAB) of Thyroid", 
    price: 1500 
},{ 
    id: 'Thy-010',
    testName: "Radioactive Iodine Uptake (RAIU) Test", 
    price: 900 
}];


let feverTests = [{ 
    id: 'Fever-001',
    testName: "Complete Blood Count (CBC)", 
    price: 900 
},{ 
    id: 'Fever-002',
    testName: "Blood Culture Test", 
    price: 1200 
},{ 
    id: 'Fever-003',
    testName: "Urinalysis", 
    price: 800 
},{ 
    id: 'Fever-004',
    testName: "CRP (C-Reactive Protein) Test", 
    price: 1000 
},{ 
    id: 'Fever-005',
    testName: "Dengue NS1 Antigen Test", 
    price: 1200 
}
];


let vitaminTests = [{ 
    id: 'VIT-001',
    testName: "Vitamin D Test", 
    price: 800 
},{ 
    id: 'VIT-002',
    testName: "Vitamin B12 Test", 
    price: 700 
},{ 
    id: 'VIT-003',
    testName: "Vitamin B6 Test", 
    price: 600 
},{ 
    id: 'VIT-004',
    testName: "Vitamin C Test", 
    price: 500 
},{ 
    id: 'VIT-005',
    testName: "Vitamin A Test", 
    price: 700 
},{ 
    id: 'VIT-006',
    testName: "Vitamin E Test", 
    price: 600 
}];


let liverTests = [{ 
    id: 'LIV-001',
    testName: "Liver Function Panel (LFT)", 
    price: 1000 
},{ 
    id: 'LIV-002',
    testName: "Alanine Aminotransferase (ALT) Test", 
    price: 500 
},{ 
    id: 'LIV-003',
    testName: "Aspartate Aminotransferase (AST) Test", 
    price: 500 
},{ 
    id: 'LIV-004',
    testName: "Alkaline Phosphatase (ALP) Test", 
    price: 600 
},{ 
    id: 'LIV-005',
    testName: "Bilirubin Test", 
    price: 400 
}];


let kidneyTests = [{ 
    id: 'KID-001',
    testName: "Complete Metabolic Panel (CMP)", 
    price: 1000 
},{ 
    id: 'KID-002',
    testName: "Creatinine Test", 
    price: 500 
},{ 
    id: 'KID-003',
    testName: "Blood Urea Nitrogen (BUN) Test", 
    price: 600 
},{ 
    id: 'KID-004',
    testName: "Glomerular Filtration Rate (GFR) Test", 
    price: 700 
},{ 
    id: 'KID-005',
    testName: "Urinalysis", 
    price: 400 
},{ 
    id: 'KID-006',
    testName: "Creatinine Clearance Test", 
    price: 800 
},{ 
    id: 'KID-007',
    testName: "Electrolyte Panel", 
    price: 500 
}];


let covidTests = [{ 
    id: 'COVID-001',
    testName: "Reverse Transcription Polymerase Chain Reaction (RT-PCR) Test", 
    price: 2500 
},{ 
    id: 'COVID-002',
    testName: "Antigen Test (Rapid Test)", 
    price: 1000 
},{ 
    id: 'COVID-003',
    testName: "Antibody (Serology) Test", 
    price: 800 
},{ 
    id: 'COVID-004',
    testName: "Chest X-ray", 
    price: 1500 
},{ 
    id: 'COVID-005',
    testName: "CT Scan of Chest", 
    price: 3000 
}];


let allergyTests = [{ 
    id: 'ALL-001',
    testName: "Skin Prick Test (SPT)", 
    price: 800 
},{ 
    id: 'ALL-002',
    testName: "Allergen-specific Immunoglobulin E (IgE) Blood Test", 
    price: 1000 
},{ 
    id: 'ALL-003',
    testName: "Complete Blood Count with Differential (CBC)", 
    price: 600 
},{ 
    id: 'ALL-004',
    testName: "Eosinophil Count Test", 
    price: 500 
},{ 
    id: 'ALL-005',
    testName: "Total Immunoglobulin E (IgE) Test", 
    price: 700 
},{ 
    id: 'ALL-006',
    testName: "Patch Test", 
    price: 1200 
},{ 
    id: 'ALL-007',
    testName: "Nasal Smear Test", 
    price: 800 
},{ 
    id: 'ALL-008',
    testName: "Food Allergy Panel", 
    price: 1500 
}];


let heartTests = [{ 
    id: 'HRT-001',
    testName: "Electrocardiogram (ECG or EKG)", 
    price: 800 
},{ 
    id: 'HRT-002',
    testName: "Echocardiogram (Echo)", 
    price: 1500 
},{ 
    id: 'HRT-003',
    testName: "Stress Test (Exercise Treadmill Test or Stress Echocardiography)", 
    price: 1200 
},{ 
    id: 'HRT-004',
    testName: "Cardiac Catheterization", 
    price: 5000 
},{ 
    id: 'HRT-005',
    testName: "Cardiac CT Scan", 
    price: 2000 
},{ 
    id: 'HRT-006',
    testName: "Cardiac MRI (Magnetic Resonance Imaging)", 
    price: 3000 
}];


let hormoneTests = [{ 
    id: 'HORM-001',
    testName: "Thyroid Stimulating Hormone (TSH) Test", 
    price: 600 
},{ 
    id: 'HORM-002',
    testName: "Testosterone Test", 
    price: 700 
},{ 
    id: 'HORM-003',
    testName: "Estrogen Test", 
    price: 700 
}];


let infertilityTests = [{ 
    id: 'INF-001',
    testName: "Semen Analysis", 
    price: 1800 
},{ 
    id: 'INF-002',
    testName: "Ovulation Test", 
    price: 900 
},{ 
    id: 'INF-003',
    testName: "Hormone Level Testing (FSH, LH, Estradiol)", 
    price: 1200 
}];


let dnaTests = [{ 
    id: 'DNA-001',
    testName: "Paternity Test", 
    price: 1500 
},{ 
    id: 'DNA-002',
    testName: "Maternity Test", 
    price: 1500 
},{ 
    id: 'DNA-003',
    testName: "Ancestry DNA Test", 
    price: 1000 
},{ 
    id: 'DNA-004',
    testName: "Genetic Health Risk Test", 
    price: 1200 
},{ 
    id: 'DNA-005',
    testName: "Whole Genome Sequencing", 
    price: 5000 
},{ 
    id: 'DNA-006',
    testName: "DNA Profiling (DNA Fingerprinting)", 
    price: 2000 
}];


export let totalLabTests = [{
    id: 'EStALmRUoWVpFuATG1FF' ,
    image : 'https://i.pinimg.com/736x/84/59/9d/84599d55816bea5e2117a4e93259c840.jpg' ,
    testName: 'Full Body Checkup',
    subLabtestList : fullBodyCheckupPackages
} , {
    id: 'TD2w-rxv26pOq5-WhG62' ,
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OlX9VSKi6KEitnZJRT3Uq-h2gN8g3Y8SVNG7w0uqDcYeoNnG0lLDRRvslAdur9CmllY' ,
    testName: 'Diabetes',
    subLabtestList: diabetesTests
} , {
    id: 'eEppi-hOxRcH1MMvMzj0' ,
    image : 'https://i.pinimg.com/564x/ca/33/dd/ca33dd82ea410d24cb5fb6da1f97477e.jpg' ,
    testName: 'Thyroid',
    subLabtestList: thyroidTests
} , {
    id: 'NAz-8BLq-C6CY6pRYwrF' ,
    image : 'https://i.pinimg.com/564x/2e/33/c7/2e33c78ab26a55024286f59d31dc728b.jpg' ,
    testName: 'Fever' ,
    subLabtestList: feverTests
} , {
    id: 'e-9g60kwze-aFXWQtFxT' ,
    image : 'https://i.pinimg.com/564x/42/26/cc/4226cca8978fc61cc461ecdbca9a95d0.jpg' ,
    testName: 'Vitamin' ,
    subLabtestList: vitaminTests
} , {
    id: 'tXMlgxObulLqPvIGTUB0' ,
    image : 'https://i.pinimg.com/736x/98/ba/cf/98bacfd338dddaf343348deb0406306d.jpg' ,
    testName: 'Liver' ,
    subLabtestList: liverTests
} , {
    id: 'w5LhpqJ3--Y-IyroaIiW' ,
    image : 'https://i.pinimg.com/564x/84/9f/b7/849fb7a450a1803123d4e6e6e0fd5e7f.jpg' ,
    testName: 'Kidney' ,
    subLabtestList: kidneyTests
} , {
    id: 'hxfUNqH7su9wDa1ZnPmX' ,
    image : 'https://static.vecteezy.com/system/resources/previews/007/485/501/non_2x/corona-virus-covid-19-icon-pandemic-virus-on-white-background-free-vector.jpg' ,
    testName: 'Covid-19' ,
    subLabtestList: covidTests
} , {
    id: 'nDr-kM8EX4cVz-MpajCi' ,
    image : 'https://i.pinimg.com/564x/16/ea/68/16ea6833e894d24011dc55d1872330c1.jpg' ,
    testName: 'Allergy' ,
    subLabtestList: allergyTests
} , {
    id: 'Ny--HPEPqxv-fd1s-odS' ,
    image : 'https://i.pinimg.com/564x/ba/a2/5e/baa25e4cf1a0a475e10493575042d83f.jpg' ,
    testName: 'Heart' ,
    subLabtestList: heartTests
} , {
    id: 'Kdt5XmyxuWECcDSOmxHE' ,
    image : 'https://i.pinimg.com/564x/4e/c4/34/4ec434bc896b719c11f53b0304309dac.jpg' ,
    testName: 'Hormone' ,
    subLabtestList: hormoneTests
} , {
    id: 'Hsnf-q-bTjtG6ccyJHT3' ,
    image : 'https://i.pinimg.com/564x/1d/13/2c/1d132c66b6dc74eb6dd4fa74fed28427.jpg' ,
    testName: 'Infertility' ,
    subLabtestList: infertilityTests
} , {
    id: 'Kdtf-q-bTHPEPqxv-HT3' ,
    image : 'https://i.pinimg.com/564x/a7/0a/1c/a70a1ca4b32bccabf4c82541b119f102.jpg' ,
    testName: 'DNA' ,
    subLabtestList: dnaTests
}];