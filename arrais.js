const  Nome_alunos0  =  [
        "ANA CAROLINA PONTAROLO CARVALHO" , 
            "ANA HELOÍSE MONTEIRO DA SILVA" , 
                "ANA LUIZA DA SILVA NOGUEIRA" , 
                    “ANDRE CARDIN SOARES” ,
                        "BEATRIZ BRANDT VIANA" ,
                            "BHIANCA MULDENBERGER PINTO" ,
                                "CAUÃ JUN KESHINO" ,
                                    "ELIÃ GABRIEL VIEIRA" ,
                                        "ENZO SAMUEL LISBOA ZORDENUNES" ,
                                            "GIOVANA CALDEIRA" ,
                                                "HENRIQUE DUARTE DOS SANTOS" ,
                                                    "HENRIQUE EMILIO SILVA KRUGER" ,
                                                        "IAGO DANIEL CALIXTO" ,
                                                            "IASMIN APARECIDA DA SILVA PEREIRA" ,
                                                                "ISADORA CRISTINA SILVEIRA" ,
                                                                    "JHENYFER GUIMARÃES DE LARA" ,
                                                                        "JOÃO FRANCISCO KUJIV" ,
                                                                            "JOÃO HENRIQUE MORAIS DE ASSIS" ,
                                                                                "LORENZO HENRIQUE BENIN" ,
                                                                                    "MARIO SOUZ" ,
                                                                                        “LUIZ GUSTAVO BRASIL” ,
                                                                                            "MARIA JÚLIA AMORIM DA SILVA" ,
                                                                                                "MARIA LUYZA MENDES DA SILVA LEAL" ,
                                                                                                    "PAOLA RAFAELA DOS SANTOS AMARAL" ,
                                                                                                        "PEDRO HENRIQUE LOPES DE LARA" ,
                                                                                                            "RENATO GABRIEL VIANA STRAUBE" ,
                                                                                                                "RICHARD CARRAR" ,
                                                                                                                    “VITOR DE PAULA” ,
                                                                                                                        "VINICIUS BORTOLI" ,
                                                                                                                            "WILIAN NOVAES BITTENCOURT"
                                                                                                                            ] ;
                                                                                                                            const  Número_alunos0  =  [ 1 ,  2 ,  3 ,  4 ,
                                                                                                                                5 ,  6 ,  7 ,  8 ,
                                                                                                                                    9 ,  10 ,  11 ,  12 ,
                                                                                                                                        13 ,  14 ,  15 ,  16 ,
                                                                                                                                            17 ,  18 ,  19 ,  21 ,
                                                                                                                                                22 ,  23 ,  24 ,  26 ,
                                                                                                                                                    27 ,  28 ,  34 ,  30 ,  
                                                                                                                                                        31 ,  32 ,  33   
                                                                                                                                                        ] ;
                                                                                                                                                        const  novaListaDeChamada  =  [ ] ;
                                                                                                                                                        for  ( deixe  i  =  0 ;  i  <  Nome_alunos0.comprimento ; i ++ ) {​​  
                                                                                                                                                            if  ( Número_alunos0 [ i ]  ! ==  34 )  {
                                                                                                                                                                    novaListaDeChamada . push ( {  número : Número_alunos0 [ i ] ,  nome : Nome_alunos0 [ i ]  } ) ;
                                                                                                                                                                            novaListaDeChamada . push ( {  número : Número_alunos0 [ i ] ,  nome : Nome_alunos0 [ i ] .split ( ' ' ) . slice ( 0,2 ) .join ( ' ' ) } ) ;​​ 
                                                                                                                                                                                }  outro  {
                                                                                                                                                                                        novaListaDeChamada . push ( {  numero : 21 ,  nome : "LUIZ FELIPE" } ) ;
                                                                                                                                                                                            }
                                                                                                                                                                                            }

                                                                                                                                                                                            console . log ( novaListaDeChamada ) ;
                                                                                                                                                                                            novaListaDeChamada . forEach ( aluno => console . log ( ` ${ aluno . numero } : ${ aluno . nome } ` ) )  
]