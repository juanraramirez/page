document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        { id: 9, name: 'ANEIAP Informa', image: 'ANEIAP informa.png', description: 'Las 3 ediciones del periódico capitular del semestre que se compartirá por el correo.', maxInscriptions: 6, currentInscriptions: 0 },
        { id: 12, name: 'Club de comunicación', image: 'Club de comunicación.png', description: 'Realizar actividades que potencien las habilidades comunicativas: Círculos de oratoria, debates, improvisación y juegos de rol que permitan al asociado aprender mediante la práctica.', maxInscriptions: 0, currentInscriptions: 0 },
        { id: 4, name: 'Conocimiento ingenieril', image: 'Conocimiento ingenieril.png', description: 'Los asociados realizarán cursos en plataformas digitales que complementen los conocimiento adquiridos en la Universidad. Se harán espacios para compartir el conocimiento adquirido en los cursos con otros asociados.', maxInscriptions: 7, currentInscriptions: 0 },
        { id: 2, name: 'Estrategia Digital', image: 'Estrategia Digital.png', description: 'Crearemos un estrategia de marketing digital para las redes sociales del capítulo y toda su presencia en el social media.', maxInscriptions: 0, currentInscriptions: 0 },
        { id: 7, name: 'FRAC', image: 'FRAC.png', description: 'La planeación, logística, presupuesto, realización y ejecución del FRAC.', maxInscriptions: 7, currentInscriptions: 0 },
        { id: 8, name: 'Green team', image: 'Green team.png', description: 'Realizaremos al menos 2 espacios: 1 de responsabilidad ambiental y otro de responsabilidad social.', maxInscriptions: 6, currentInscriptions: 0 },
        { id: 6, name: 'Lingua estrangeira', image: 'Lingua estrangeira.png', description: 'Se realizará al menos 1 espacio de inmersión en cultura y lengua extranjera enfocados en temáticas de las ingenierías Administrativa e Industrial.', maxInscriptions: 7, currentInscriptions: 0 },
        { id: 1, name: 'Misión SAIO', image: 'Mision SAIO 1.png', description: 'Investigaremos la planificación y organización del evento abordando la definición de objetivos claros, la segmentación del público, la temática central, y el diseño de la identidad visual.', maxInscriptions: 0, currentInscriptions: 0 },
        { id: 10, name: 'Mentes de halcón', image: 'Mentes de halcon.png', description: 'Los asociados se capacitarán sobre los EEFF de ANEIAP, aprenderán acerca del manejo de los formatos financieros, tendrán el acceso a los movimientos contables y realizarán exposiciones e informe sobre la situación financiera del capítulo. Además tendrán acceso a cursos financieros de Coursera.', maxInscriptions: 8, currentInscriptions: 0 },
        { id: 3, name: 'Programa de insignias', image: 'Programa de insignias.png', description: 'Ejecutaremos el plan de incentivos por medio de la creación de insignias físicas o virtuales que fomenten la participación de los Asociados.', maxInscriptions: 7, currentInscriptions: 0 },
        { id: 5, name: 'Plataforma de datos', image: 'Plataforma de datos.png', description: 'Realizaremos una herramienta de gestión capitular, además se trabajarán con los datos que se tienen actualmente, para ayudar a la toma de decisiones de los líderes y juntas.', maxInscriptions: 0, currentInscriptions: 0 },
        { id: 12, name: 'Semana empresarial', image: 'Semana empresarial.png', description: 'Realizaremos una semana empresarial en la Facultad, donde empresas tengan espacios donde realicen pasantías y retos empresariales reales.', maxInscriptions: 3, currentInscriptions: 0 },
        { id: 13, name: 'Estructura de valor único', image: 'Estructura de valor unico.png', description: 'Se diseñará y estructurará un sistema en Discord que integrará al capítulo en diversos espacios colaborativos. Adicionalmente, se establecerá un mecanismo para ofrecer proyectos y asesorías a otros capítulos u organizaciones, aprovechando los servicios que ANEIAP ya ofrece, impulsando así el crecimiento y la influencia de la asociación.', maxInscriptions: 4, currentInscriptions: 0 },
        
    ];
    
    
    const committees = [
        { id: 1, name: 'Análisis de mercados y alianzas', image: 'Analisis de mercados y alianzas.png', description: 'Realizaremos un análisis exhaustivo de los servicios actuales que ofrece la asociación, identificando oportunidades de mejora, también se buscará participar en convocatorias que puedan retribuir a ANEIAP y se trabajará en la formalización de las alianzas ya iniciadas asegurando que estén alineadas con los objetivos estratégicos de la asociación.', maxInscriptions: 7, currentInscriptions: 0 },
        { id: 2, name: 'Gestión de recursos', image: 'Gestion de recursos.png', description: 'Realizaremos capacitaciones sobre el manejo de las fuentes de ingreso del capítulo y nos encargaremos de planear y ejecutar las actividades de obtención de recursos, recolectar la cuota de sostenimiento, cobrar la cartera morosa y de ejecutar los préstamos capitulares.', maxInscriptions: 7, currentInscriptions: 0 },
        { id: 3, name: 'Instateam', image: 'Instateam.png', description: 'Llevar a cabo la creación del contenido, estrategia y publicación del Instagram capitular', maxInscriptions: 6, currentInscriptions: 0 },
        { id: 4, name: 'Integraciones', image: 'Integraciones.png', description: 'Planear y ejecutar 2 integraciones: 1 integración capitular para asociados (estudiantes) y 1 integración para egresados.', maxInscriptions: 0, currentInscriptions: 0 },
        { id: 5, name: 'Investigación de mercados', image: 'Investigacion de mercados.png', description: 'Se definirán estrategias y planes de acción, además se realizarán gráficos en Looker Studio que sirvan como informes para las siguientes Juntas Directivas.', maxInscriptions: 0, currentInscriptions: 0 },
        { id: 6, name: 'Posicionamiento y bienestar', image: 'Posicionamiento y bienestar.png', description: 'Se diseñarán y ejecutarán actividades presenciales orientadas a posicionar la marca y fortalecer el trabajo en equipo, con un enfoque especial en actividades deportivas. Además, se promoverá el bienestar por medio de actividades que fomenten la amistad y el compañerismo entre los asociados.', maxInscriptions: 0, currentInscriptions: 0 },
        { id: 7, name: 'Premios MAX', image: 'Premios MAX.png', description: 'Planear y ejecutar los Premios MAX, un evento en donde se resalten las cualidades y el excelente trabajo de los asociados del capítulo en base en su trabajo y desempeño.', maxInscriptions: 0, currentInscriptions: 0 },
        { id: 8, name: 'TechDesign', image: 'TechDesing.png', description: 'Realizar todas las piezas solicitas por los asociados y directores para otros proyectos,  además, realizar piezas de información nacional, también el comité estará encargado de crear 2 infografías en el semestre que serán compartidas a los profesores sobre qué estamos haciendo en ANEIAP.', maxInscriptions: 5, currentInscriptions: 0 },
        { id: 9, name: 'Visitas industriales', image: 'Visitas industriales.png', description: 'Coordinar, planear y ejecutar visitas industriales para los asociados con el fin de proporcionarles una experiencia práctica y directa sobre los procesos, tecnologías y operaciones en diferentes sectores industriales.', maxInscriptions: 0, currentInscriptions: 0 }
    ];

    const projectsContainer = document.getElementById('projects-container');
    const projectSelect = document.getElementById('project-select');
    const projectSelecteds = new Set();

    const committeesContainer = document.getElementById('committees-container');
    const committeesSelect = document.getElementById('committees-select');
    const committeesSelecteds = new Set();

    const divInitialForm = document.getElementById('div-initial-form');
    const content = document.getElementById('content');

    const teamMemberSelect = document.getElementById('team-member');
    const teamOptions = document.getElementById('team-options');
    const saioMemberSelect = document.getElementById('saio-member');
    const saioOptions = document.getElementById('saio-options');

    let dataFromGoogleSheet = [];
    let form = new FormData();

    teamMemberSelect.addEventListener('change', function () {
        if (teamMemberSelect.value === 'Si') {
            teamOptions.classList.remove('hidden');
        } else {
            teamOptions.classList.add('hidden');
        }
    });

    saioMemberSelect.addEventListener('change', function () {
        if (saioMemberSelect.value === 'Si') {
            saioOptions.classList.remove('hidden');
        } else {
            saioOptions.classList.add('hidden');
        }
    });

    document.forms['form'].addEventListener('submit', function (event) {
        event.preventDefault();
        ingresar()
    });

    ingresar = () => {
        const name = document.getElementById('initial-name').value.trim();
        const email = document.getElementById('initial-email').value.trim();

        if (name && email) {
            form = new FormData(document.forms['form'])
            divInitialForm.classList.add('hidden');
            content.classList.remove('hidden');
            populateProjectsAndCommittees();
        } else {
            alert('Por favor, complete todos los campos antes de continuar.');
        }
    }

    enviarFormulario = () => {

        Swal.showLoading()

        let formToSend = form;

        formToSend = removeFieldFromFormData(formToSend, "Proyecto seleccionado")
        formToSend = removeFieldFromFormData(formToSend, "Comité seleccionado")

        formToSend.append('Proyecto seleccionado', Array.from(projectSelecteds).join(" - "));
        formToSend.append('Comité seleccionado', Array.from(committeesSelecteds).join(" - "));

        fetch('https://script.google.com/macros/s/AKfycbzx3xh_NG1Mm7aG-wpnllPBpNK2a5IhkGQyJWpnWjw-qIigi4EsSsTu4GnWHj5e56EsXw/exec', {
            method: 'POST',
            body: formToSend
        })
            .then(() => {
                document.forms['form'].reset();
                Swal.fire({
                    icon: "success",
                    title: "Inscrito correctamente",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => alert("Error!", error.message));
    }

    populateProjectsAndCommittees = () => {
        projectsContainer.innerHTML = '';
        committeesContainer.innerHTML = '';

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <div class="image-container">
                    <img src="${project.image}" alt="${project.name}">
                    <div class="profile-overlay">Perfil del estudiante para el proyecto ${project.name}</div>
                </div>
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <p>Inscripciones disponibles: ${project.maxInscriptions - project.currentInscriptions}</p>
                <button class="inscribirse-btn" data-id="${project.id}" data-type="project">¿Quieres estar en este proyecto?</button>
            `;
            projectsContainer.appendChild(projectCard);

            const projectOption = document.createElement('option');
            projectOption.value = project.name;
            projectOption.textContent = project.name;
            projectSelect.appendChild(projectOption);
        });

        committees.forEach(committee => {
            const committeeCard = document.createElement('div');
            committeeCard.classList.add('committee-card');
            committeeCard.innerHTML = `
                <div class="image-container">
                    <img src="${committee.image}" alt="${committee.name}">
                    <div class="profile-overlay">Perfil del estudiante para el comité ${committee.name}</div>
                </div>
                <h3>${committee.name}</h3>
                <p>${committee.description}</p>
                <p>Inscripciones disponibles: ${committee.maxInscriptions - committee.currentInscriptions}</p>
                <button class="inscribirse-btn" data-id="${committee.id}" data-type="committee">¿Quieres estar en este comité?</button>
            `;

            committeesContainer.appendChild(committeeCard);

            const committeeOption = document.createElement('option');
            committeeOption.value = committee.name;
            committeeOption.textContent = committee.name;
            committeesSelect.appendChild(committeeOption);
        });

        // Agregar manejador de eventos para los botones de inscripción
        document.querySelectorAll('.inscribirse-btn').forEach(button => {
            button.addEventListener('click', handleInscription);
        });
    }

    handleInscription = (event) => {
        const button = event.target;
        const id = parseInt(button.getAttribute('data-id'));
        const type = button.getAttribute('data-type');

        if (type === 'project') {
            const project = projects.find(p => p.id === id);
            if (projectSelecteds.has(project.name)) {
                alert('Ya inscribiste este proyecto');
            } else if (project && project.currentInscriptions < project.maxInscriptions) {
                project.currentInscriptions++;
            } else {
                alert('No hay más cupos disponibles para este proyecto.');
            }

            projectSelecteds.add(project.name)
        } else if (type === 'committee') {
            const committee = committees.find(c => c.id === id);
            if (committeesSelecteds.has(committee.name)) {
                alert('Ya inscribiste este comité');
            } else if (committee && committee.currentInscriptions < committee.maxInscriptions) {
                committee.currentInscriptions++;
            } else {
                alert('No hay más cupos disponibles para este comité.');
            }

            committeesSelecteds.add(committee.name)
        }
    }

    formDataToObject = (formData) => {
        const obj = {};
        formData.forEach((value, key) => {
            if (!obj[key]) {
                obj[key] = [];
            }
            obj[key].push(value);
        });
        return obj;
    }

    removeFieldFromFormData = (formData, fieldToRemove) => {
        // Convert FormData to an object
        const formDataObject = formDataToObject(formData);

        // Create a new FormData object
        const newFormData = new FormData();

        // Append all fields except the one to remove
        Object.keys(formDataObject).forEach(key => {
            if (key !== fieldToRemove) {
                formDataObject[key].forEach(value => newFormData.append(key, value));
            }
        });

        return newFormData;
    }

    loadData = () => {
        var url = "https://docs.google.com/spreadsheets/d/1RyVh5tBf1NVlJqflU1-STWkqQhPnGWDbgr9g4-2lKgk/pub?output=csv";
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                dataFromGoogleSheet = parseCSV(xmlhttp.responseText)
                updateCurrentInscriptions()
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send(null);
    }

    updateCurrentInscriptions = () => {
        const dataToUpdate = dataFromGoogleSheet.slice(1);
        console.log(dataToUpdate);

        dataToUpdate.forEach(item => {
            const proyectos = item[6].split(" - ")
            const comites = item[7].split(" - ")

            proyectos.forEach(proyecto => {
                const actualProject =
                    projects.filter(project => project.name == proyecto);

                if (actualProject.length > 0) actualProject[0].currentInscriptions++
            })

            comites.forEach(comite => {
                const actualcomite =
                    committees.filter(committe => committe.name == comite);

                if (actualcomite.length > 0) actualcomite[0].currentInscriptions++
            })

        });

    }

    parseCSV = (csvString) => {
        const rows = csvString.trim().split('\n');
        const data = rows.map(row => row.split(',').map(cell => cell.replace(/\r$/, '')));
        return data;
    }

    populateProjectsAndCommittees();
    loadData()
});
