import { 
  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar 
} from '@ionic/react';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>

          <IonButton fill="clear">Action 1</IonButton>
          <IonButton fill="clear">Action 2</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
