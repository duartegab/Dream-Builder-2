CREATE DATABASE dreambuilder;

USE dreambuilder;


CREATE TABLE usuarios (
	id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(20) NOT NULL,
    senha VARCHAR(20) NOT NULL, 
    data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM usuarios;

#############################################################################################################################################

SELECT * FROM edicao;

CREATE TABLE edicao (
    id_edicao INT AUTO_INCREMENT PRIMARY KEY,
    semestre_edicao VARCHAR(6) UNIQUE NOT NULL,
    cursos_edicao VARCHAR(100) NOT NULL, 
    inscricoes INT
);

INSERT INTO edicao VALUES (NULL,'2015.1', 'ADS - MANHÃ E NOITE, GE - EAD, GPI - MANHÃ E NOITE', 757);
INSERT INTO edicao VALUES (NULL,'2015.2', 'ADS - MANHÃ E NOITE, GE - EAD, GPI - MANHÃ E NOITE', 701);
INSERT INTO edicao VALUES (NULL,'2016.1', 'ADS - MANHÃ E NOITE, GE - EAD, GPI - MANHÃ E NOITE', 804);
INSERT INTO edicao VALUES (NULL,'2016.2', 'ADS - MANHÃ E NOITE, GE - EAD, GPI - MANHÃ E NOITE', 795);
INSERT INTO edicao VALUES (NULL,'2017.1', 'ADS - MANHÃ E NOITE, GE - EAD, GPI - MANHÃ E NOITE', 996);
INSERT INTO edicao VALUES (NULL,'2017.2', 'ADS - MANHÃ E NOITE, GE - EAD, GPI - MANHÃ E NOITE', 901);

INSERT INTO edicao VALUES (NULL,'2018.1', 'ADS - MANHÃ E NOITE, GE - EAD, GPI - MANHÃ E NOITE, GRH - MANHÃ E NOITE', 1058);
INSERT INTO edicao VALUES (NULL,'2018.2', 'ADS - MANHÃ E NOITE, GE - EAD, GPI - MANHÃ E NOITE, GRH - MANHÃ E NOITE', 997);
INSERT INTO edicao VALUES (NULL,'2019.1', 'ADS - MANHÃ E NOITE, GE - EAD, GPI - MANHÃ E NOITE, GRH - MANHÃ E NOITE', 1127);
INSERT INTO edicao VALUES (NULL,'2019.2', 'ADS - MANHÃ E NOITE, GE - EAD, GPI - MANHÃ E NOITE, GRH - MANHÃ E NOITE', 1002);
INSERT INTO edicao VALUES (NULL,'2020.1', 'ADS - MANHÃ E NOITE, GE - EAD, GPI - MANHÃ E NOITE, GRH - MANHÃ E NOITE', 1499);

INSERT INTO edicao VALUES (NULL,'2022.2', 'ADS - MANHÃ E NOITE, DSM - NOITE, GE - EAD, GPI - MANHÃ E NOITE, GRH - MANHÃ E NOITE', 1501);
INSERT INTO edicao VALUES (NULL,'2023.1', 'ADS - MANHÃ E NOITE, DSM - NOITE, GE - EAD, GPI - MANHÃ E NOITE, GRH - MANHÃ E NOITE', 1524);
INSERT INTO edicao VALUES (NULL,'2023.2', 'ADS - MANHÃ E NOITE, DSM - NOITE, GE - EAD, GPI - MANHÃ E NOITE, GRH - MANHÃ E NOITE', 1312);
INSERT INTO edicao VALUES (NULL,'2024.1', 'ADS - MANHÃ E NOITE, DSM - NOITE, GE - EAD, GPI - MANHÃ E NOITE, GRH - MANHÃ E NOITE', 1773);
INSERT INTO edicao VALUES (NULL,'2024.2', 'ADS - MANHÃ E NOITE, DSM - NOITE, GE - EAD, GPI - MANHÃ E NOITE, GRH - MANHÃ E NOITE', 1552);

#------------------------------------------------------------------------------------------------------------------------------------------#

SELECT * FROM cursos;

CREATE TABLE cursos (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    idEdicao INT,
    nome_curso VARCHAR(5) NOT NULL,
    turno_curso ENUM('manha', 'noite', 'ead') NOT NULL,
    nota_corte DOUBLE NOT NULL,
    maior_nota DOUBLE,
    menor_nota DOUBLE,
    inscricoes INT,
    vagas INT,
    demanda DOUBLE GENERATED ALWAYS AS (inscricoes / vagas) VIRTUAL,
    FOREIGN KEY (idEdicao) REFERENCES edicao(id_edicao)
);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 1, 'ADS', 'manha', 60.0 , 69.5, 60.6, 200, 40), (NULL, 1, 'ADS', 'noite', 62.0 , 72.5, 62.5, 257, 40),
(NULL, 1, 'GE', 'ead', 57.0 , 72.5, 57.9, 150, 40), (NULL, 1, 'GPI', 'manha', 53.0 , 63.6, 53.4, 60, 40),
(NULL, 1, 'GPI', 'noite', 56.0 , 61.5, 56.5, 90, 40);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 2, 'ADS', 'manha', 58.0 , 66.5, 58.4, 170, 40), (NULL, 2, 'ADS', 'noite', 60.0 , 71.1, 60.1, 231, 40),
(NULL, 2, 'GE', 'ead', 55.0 , 70.6, 55.4, 120, 40), (NULL, 2, 'GPI', 'manha', 51.0 , 59.1, 51.9, 80, 40),
(NULL, 2, 'GPI', 'noite', 54.0 , 59.2, 54.9, 100, 40);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 3, 'ADS', 'manha', 61.0 , 70.5, 61.9, 200, 40), (NULL, 3, 'ADS', 'noite', 63.0 , 73.1, 63.6, 304, 40),
(NULL, 3, 'GE', 'ead', 58.0 , 68.8, 58.3, 185, 40), (NULL, 3, 'GPI', 'manha', 56.0 , 61.8, 56.2, 50, 40),
(NULL, 3, 'GPI', 'noite', 57.0 , 63.9, 57.1, 65, 40);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 4, 'ADS', 'manha', 59.0 , 67.5, 59.5, 195, 40), (NULL, 4, 'ADS', 'noite', 61.0 , 71.7, 61.2, 250, 40),
(NULL, 4, 'GE', 'ead', 56.0 , 71.6, 56.4, 150, 40), (NULL, 4, 'GPI', 'manha', 51.0 , 59.5, 51.5, 70, 40),
(NULL, 4, 'GPI', 'noite', 53.0 , 58.6, 53.4, 130, 40);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 5, 'ADS', 'manha', 62.0 , 72.5, 62.9, 240, 40), (NULL, 5, 'ADS', 'noite', 65.0 , 75.6, 65.1, 396, 40),
(NULL, 5, 'GE', 'ead', 59.0 , 76.5, 59.5, 200, 40), (NULL, 5, 'GPI', 'manha', 56.0 , 64.2, 56.8, 65, 40),
(NULL, 5, 'GPI', 'noite', 57.0 , 63.3, 57.7, 95, 40);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 6, 'ADS', 'manha', 60.0 , 69.5, 60.1, 201, 40), (NULL, 6, 'ADS', 'noite', 62.0 , 72.9, 62.4, 300, 40),
(NULL, 6, 'GE', 'ead', 56.0 , 71.9, 56.6, 190, 40), (NULL, 6, 'GPI', 'manha', 52.0 , 58.9, 52.1, 85, 40),
(NULL, 6, 'GPI', 'noite', 53.0 , 58.1, 53.9, 125, 40);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 7, 'ADS', 'manha', 63.0 , 74.4, 63.9, 258, 40), (NULL, 7, 'ADS', 'noite', 65.0 , 80.3, 65.8, 340, 40),
(NULL, 7, 'GE', 'ead', 61.0 , 79.1, 61.9, 160, 40), (NULL, 7, 'GPI', 'manha', 56.0 , 61.6, 56.4, 60, 40),
(NULL, 7, 'GPI', 'noite', 58.0 , 62.5, 58.5, 95, 40), (NULL, 7, 'GRH', 'manha', 56.0 , 61.1, 56.9, 65, 40),
(NULL, 7, 'GRH', 'noite', 58.0 , 62.8, 58.2, 80, 40);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 8, 'ADS', 'manha', 61.0 , 70.9, 61.4, 190, 40), (NULL, 8, 'ADS', 'noite', 63.0 , 69.9, 63.3, 337, 40),
(NULL, 8, 'GE', 'ead', 58.0 , 73.3, 58.7, 130, 40), (NULL, 8, 'GPI', 'manha', 53.0 , 58.1, 53.9, 55, 40),
(NULL, 8, 'GPI', 'noite', 54.0 , 59.7, 54.8, 105, 40), (NULL, 8, 'GRH', 'manha', 54.0 , 59.4, 54.5, 60, 40),
(NULL, 8, 'GRH', 'noite', 55.0 , 59.4, 55.5, 120, 40);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 9, 'ADS', 'manha', 65.0 , 76.5, 65.9, 227, 40), (NULL, 9, 'ADS', 'noite', 66.0 , 71.6, 66.6, 395, 40),
(NULL, 9, 'GE', 'ead', 63.0 , 78.7, 63.3, 185, 40), (NULL, 9, 'GPI', 'manha', 57.0 , 63.8, 57.2, 65, 40),
(NULL, 9, 'GPI', 'noite', 59.0 , 64.9, 59.1, 100, 40), (NULL, 9, 'GRH', 'manha', 57.0 , 65.5, 57.4, 70, 40),
(NULL, 9, 'GRH', 'noite', 59.0 , 64.7, 59.3, 85, 40);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 10, 'ADS', 'manha', 63.0 , 71.2, 63.6, 240, 40), (NULL, 10, 'ADS', 'noite', 64.0 , 74.9, 64.4, 362, 40),
(NULL, 10, 'GE', 'ead', 59.0 , 74.9, 59.4, 170, 40), (NULL, 10, 'GPI', 'manha', 55.0 , 65.5, 55.5, 50, 40),
(NULL, 10, 'GPI', 'noite', 55.0 , 60.6, 55.4, 65, 40), (NULL, 10, 'GRH', 'manha', 55.0 , 59.7, 55.2, 55, 40),
(NULL, 10, 'GRH', 'noite', 55.0 , 54.1, 55.8, 60, 40);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 11, 'ADS', 'manha', 67.0 , 77.2, 67.8, 299, 40), (NULL, 11, 'ADS', 'noite', 68.0 , 83.2, 68.7, 545, 40),
(NULL, 11, 'GE', 'ead', 65.0 , 80.5, 65.5, 260, 40), (NULL, 11, 'GPI', 'manha', 57.0 , 63.2, 57.8, 70, 40),
(NULL, 11, 'GPI', 'noite', 59.0 , 66.3, 59.7, 115, 40), (NULL, 11, 'GRH', 'manha', 58.0 , 67.1, 58.9, 85, 40),
(NULL, 11, 'GRH', 'noite', 60.0 , 67.7, 60.4, 125, 40);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 12, 'ADS', 'manha', 68.0 , 72.5, 68.1, 250, 36), (NULL, 12, 'ADS', 'noite', 69.0 , 84.9, 69.1, 491, 36),
(NULL, 12, 'DSM', 'noite', 58.0 , 73.5, 58.5, 250, 36), (NULL, 12, 'GE', 'ead', 66.0 , 81.4, 66.6, 210, 40), 
(NULL, 12, 'GPI', 'manha', 58.0 , 66.1, 58.1, 65, 28), (NULL, 12, 'GPI', 'noite', 59.0 , 66.6, 59.9, 90, 28),
(NULL, 12, 'GRH', 'manha', 57.0 , 68.5, 57.5, 60, 28), (NULL, 12, 'GRH', 'noite', 61.0 , 69.2, 61.9, 85, 28);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 13, 'ADS', 'manha', 70.0 , 79.9, 70.2, 224, 36), (NULL, 13, 'ADS', 'noite', 71.0 , 86.5, 71.5, 520, 36),
(NULL, 13, 'DSM', 'noite', 64.0 , 74.1, 64.6, 300, 36), (NULL, 13, 'GE', 'ead', 68.0 , 83.4, 68.9, 230, 40), 
(NULL, 13, 'GPI', 'manha', 58.0 , 68.4, 58.4, 50, 28), (NULL, 13, 'GPI', 'noite', 60.0 , 67.5, 60.5, 80, 28),
(NULL, 13, 'GRH', 'manha', 59.0 , 69.2, 59.8, 45, 28), (NULL, 13, 'GRH', 'noite', 62.0 , 67.9, 62.1, 75, 28);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 14, 'ADS', 'manha', 66.0 , 71.4, 66.4, 190, 36), (NULL, 14, 'ADS', 'noite', 67.0 , 77.5, 67.5, 412, 36),
(NULL, 14, 'DSM', 'noite', 61.0 , 81.6, 61.9, 210, 36), (NULL, 14, 'GE', 'ead', 63.0 , 77.1, 63.9, 195, 40), 
(NULL, 14, 'GPI', 'manha', 56.0 , 61.1, 56.9, 65, 28), (NULL, 14, 'GPI', 'noite', 58.0 , 63.2, 58.8, 110, 28),
(NULL, 14, 'GRH', 'manha', 57.0 , 62.9, 57.1, 50, 28), (NULL, 14, 'GRH', 'noite', 60.0 , 64.6, 60.3, 80, 28);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 15, 'ADS', 'manha', 67.0 , 76.3, 67.9, 233, 36), (NULL, 15, 'ADS', 'noite', 69.0 , 79.4, 69.9, 600, 36),
(NULL, 15, 'DSM', 'noite', 67.0 , 82.9, 67.4, 330, 36), (NULL, 15, 'GE', 'ead', 67.0 , 82.8, 67.3, 310, 40), 
(NULL, 15, 'GPI', 'manha', 58.0 , 68.3, 58.2, 60, 28), (NULL, 15, 'GPI', 'noite', 60.0 , 67.9, 60.1, 90, 28),
(NULL, 15, 'GRH', 'manha', 60.0 , 69.7, 60.3, 55, 28), (NULL, 15, 'GRH', 'noite', 62.0 , 69.4, 62.7, 95, 28);

INSERT INTO cursos (id_curso, idEdicao, nome_curso, turno_curso, nota_corte, maior_nota, menor_nota, inscricoes, vagas)
VALUES (NULL, 16, 'ADS', 'manha', 64.0 , 72.5, 64.5, 200, 36), (NULL, 16, 'ADS', 'noite', 66.0 , 76.6, 66.4, 482, 36),
(NULL, 16, 'DSM', 'noite', 63.0 , 83.1, 63.6, 270, 36), (NULL, 16, 'GE', 'ead', 61.0 , 79.4, 61.4, 280, 40), 
(NULL, 16, 'GPI', 'manha', 57.0 , 62.5, 57.5, 85, 28), (NULL, 16, 'GPI', 'noite', 59.0 , 61.6, 59.4, 100, 28),
(NULL, 16, 'GRH', 'manha', 59.0 , 64.5, 59.5, 50, 28), (NULL, 16, 'GRH', 'noite', 60.0 , 64.1, 60.9, 85, 28);


#############################################################################################################################################

SELECT * FROM formulario;

CREATE TABLE formulario (
	id_forms INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(150),
    idade INT,
    situacao INT,
    curso VARCHAR(5),
    feedback VARCHAR(350),
    pagina VARCHAR(25), 
    dificuldade VARCHAR(250),
    experiencia INT,
    utilidade INT,
    recomendacao INT
    
);

#############################################################################################################################################

SELECT * FROM evolucao;

CREATE TABLE evolucao (
	id_evolucao INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150),
    prova INT,
    evolucao VARCHAR(3),
    semestre VARCHAR(6), 
    geral INT,
    pesodois INT,
    redacao INT, 
    notacorte DOUBLE
);