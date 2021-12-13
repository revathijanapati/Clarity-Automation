Feature: Ensruing login module for clarity application
    Scenario Outline: Scenario Outline name: Verify login into application
        Given Launch application
        And Enter "<Username>" And "<Password>"
        And Click on login
        Then Click on ALM Demo User1
        Examples:
            | Username | Password | 
            | ClarityUser | SystemPassword  |  