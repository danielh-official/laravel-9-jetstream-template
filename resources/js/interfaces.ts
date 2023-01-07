export interface JetstreamInterface {
    hasTeamFeatures: boolean;
    canCreateTeams: boolean;
    managesProfilePhotos: boolean;
    hasApiFeatures: boolean;
    hasTermsAndPrivacyPolicyFeature: boolean;
    hasEmailVerification: boolean;
    canUpdateProfileInformation: boolean;
    canManageTwoFactorAuthentication: boolean;
    hasAccountDeletionFeatures: boolean;
    canUpdatePassword: boolean;
    flash: {
        token: string;
    }
}

export interface RoleInterface {
    key: number | null;
    name: string;
    description: string;
}

export interface UserInterface {
    current_team: {
        name: string;
    },
    current_team_id: number;
    all_teams: {
        id: number;
        name: string;
    }[];
    profile_photo_url: string;
    name: string;
    email: string;
    profile_photo_path: string;
    email_verified_at: string;
    membership: {
        role: RoleInterface
    };
    id: number;
}

export interface RouteMethodObjectInterface {
    current: Function
}
