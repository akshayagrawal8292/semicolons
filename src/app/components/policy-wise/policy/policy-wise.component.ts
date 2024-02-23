import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy-wise',
  templateUrl: './policy-wise.component.html',
  styleUrls: ['./policy-wise.component.css'],
})
export class PolicyWiseComponent {
  constructor(private snackBar: MatSnackBar, private router: Router) {}
  cardList: any[] = [];
  selectedCards: any[] = [];
  ngOnInit() {
    this.cardList = [
      {
        id: 1,
        cardDetails: 'Progressive Auto Insurance',
        isSelected: false,
        fileUrl:
          'https://policywise.wonderfulflower-ea08a840.westus2.azurecontainerapps.io/static/media/Progressive_agreement.6918fe56255e9ea5548c.pdf',
      },
      {
        id: 2,
        cardDetails: 'State Farm Mutual Automobile Insurance',
        isSelected: false,
        fileUrl:
          'https://policywise.wonderfulflower-ea08a840.westus2.azurecontainerapps.io/static/media/StateFarm_agreement.5effc529ee6375fe4f0a.pdf',
      },
      {
        id: 3,
        cardDetails: 'Personal Auto Policy - ILLINOIS',
        isSelected: false,
        fileUrl: '',
      },
    ];
  }

  toggleSelection(card: any) {
    if (card.isSelected) {
      this.selectedCards = this.selectedCards.filter(
        (selectedCard: any) => selectedCard.id !== card.id
      );
      card.isSelected = false;
    } else {
      if (this.selectedCards.length < 2) {
        this.selectedCards.push(card);
        card.isSelected = true;
      } else {
        this.snackBar.open('You can select only two items at a time', 'Close', {
          duration: 2000,
        });
      }
    }
  }

  comparePolicies() {
    if (this.selectedCards.length < 2) {
      this.snackBar.open('Please select two policies to compare', 'Close', {
        duration: 2000,
      });
    } else {
      this.router.navigate(['policywise/compare'], {
        queryParams: {
          firstPolicy: this.selectedCards[0].cardDetails,
          secondPolicy: this.selectedCards[1].cardDetails,
        },
      });
    }
  }

  openFile(fileUrl: any) {
    window.open(fileUrl, '_blank');
  }
}
