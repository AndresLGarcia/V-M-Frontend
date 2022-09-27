import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acronym, AcronymResponse } from 'src/app/shared/types/acronyms';
import { AcronymService } from '../../services/acronym.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  result: Acronym[] = [];
  value!: string;
  lista: string[] = [];
  constructor(private acronymService: AcronymService, private routes: Router) {}

  ngOnInit(): void {
    this.listarAcronym();
  }

  listarAcronym() {
    this.acronymService.getAcronyms().subscribe({
      next: (res: AcronymResponse) => {
        const { data } = res;
        this.result = data;
      },
      error: (err) => console.error(err),
    });
  }

  addAcronym() {
    this.acronymService.addAcronyms(this.value).subscribe({
      next: (res: string[]) => {
        this.lista = res;
        this.listarAcronym();
      },
      error: (err) => console.error(err),
    });
  }
}
