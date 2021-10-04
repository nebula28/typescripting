// enum Role { SOFTWARE_ENGI, LEAD_ENGI, IT};
// enum Role { SOFTWARE_ENGI = 47, LEAD_ENGI, IT }; // 47, 48, 49
enum Role { SOFTWARE_ENGI = "SE", LEAD_ENGI = "LE", IT = 21 };

const person = {
    name: 'josh',
    role: Role.SOFTWARE_ENGI
}

if (person.role === Role.SOFTWARE_ENGI) {
    console.log(person.name + ' is a software engineer: ' + person.role);
}
